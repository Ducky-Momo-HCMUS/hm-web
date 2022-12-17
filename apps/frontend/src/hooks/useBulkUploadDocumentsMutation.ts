/* eslint-disable no-restricted-syntax */
import { useCallback, useEffect, useState } from 'react';

import { useUploadDocumentMutation } from '../generated-types';

interface BulkUploadOptions {
  onUploadCompleted: (successDocuments: File[]) => void;
  onUploadFailed: (
    failedDocuments: File[],
    bulkUploadDocuments?: (documents: File[]) => Promise<void>,
    resetError?: () => void
  ) => void;
}

function useBulkUploadDocumentsMutation({
  onUploadCompleted,
  onUploadFailed,
}: BulkUploadOptions) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [status, setStatus] = useState({});
  const [uploadDocument] = useUploadDocumentMutation();
  const [bulkResult, setBulkResult] = useState<any[]>([]);

  const resetError = useCallback(() => setErrors(null), []);

  const uploadDocumentAndSaveResult = useCallback(
    async (document: File) => {
      let result;
      const fileName = document.name;

      try {
        const { data } = await uploadDocument({
          variables: {
            file: document,
            input: {
              name: 'Document',
            },
          },
        });
        result = data?.uploadDocument;
      } catch (error) {
        result = { error };
      } finally {
        setBulkResult((currentResult) => {
          return [
            ...currentResult,
            {
              result,
              fileName,
              document,
            },
          ];
        });
      }
    },
    [uploadDocument]
  );

  const bulkUploadDocuments = useCallback(
    async (documents: File[]) => {
      console.log('uploading...', documents);
      setBulkResult([]);
      setErrors(null);
      setLoading(true);
      setStatus({});
      await Promise.allSettled(documents.map(uploadDocumentAndSaveResult));
      setLoading(false);
    },
    [uploadDocumentAndSaveResult]
  );

  useEffect(() => {
    if (!loading && bulkResult.length) {
      let hasUploaded = false;
      let hasError = false;
      const allErrors: any[] = [];
      const successDocuments: any[] = [];
      const failedDocuments: any[] = [];
      for (const {
        fileName,
        document,
        result: { error },
      } of bulkResult) {
        if (error) {
          allErrors[fileName] = error;
          failedDocuments.push(document);
          hasError = true;
        } else {
          successDocuments.push(document);
          hasUploaded = true;
        }
      }

      if (hasError) {
        setErrors(allErrors as any);
        onUploadFailed(failedDocuments, bulkUploadDocuments, resetError);
      }

      if (hasUploaded) {
        onUploadCompleted(successDocuments);
      }

      setStatus({
        uploadedSuccess: successDocuments.length,
        success: hasUploaded && !hasError,
        failed: !hasUploaded && hasError,
        partiallyFailed: hasUploaded && hasError,
      });
    }
  }, [bulkResult, bulkUploadDocuments, loading, resetError]);

  return {
    bulkUploadDocuments,
    loading,
    errors,
    status,
    uploadedCount: bulkResult.length,
  };
}

export default useBulkUploadDocumentsMutation;
