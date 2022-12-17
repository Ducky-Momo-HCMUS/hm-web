/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-restricted-syntax */
import { ReactiveVar } from '@apollo/client';
import { ChangeEvent, useCallback, useState } from 'react';

import { documentsVar } from '../utils/graphql/cache';

export function createAddDocuments(documentsVar: ReactiveVar<File[]>) {
  return (documents: File[]) => {
    const allDocuments = [...documentsVar()];
    for (const document of documents) {
      allDocuments.push(document);
    }

    documentsVar(allDocuments);
  };
}

const documentMutations = {
  addDocuments: createAddDocuments(documentsVar),
};

function useDocumentAttacher() {
  const [attachError, setAttachError] = useState<{
    id: string | number;
    details: Error;
  }>();
  const [newDocuments, setNewDocuments] = useState<File[]>();
  const clearDocumentAttacherState = useCallback(() => {
    setAttachError(null as any);
    setNewDocuments(null as any);
  }, []);
  const attachDocuments = useCallback(
    (fileList: FileList, event: ChangeEvent<HTMLInputElement>) => {
      clearDocumentAttacherState();
      try {
        const newDocuments: File[] = [];
        const files: File[] = [];
        Array.prototype.forEach.call(fileList, (file: File) => {
          // TODO: Restrict type and size of files
          newDocuments.push(file);

          files.push(file);
        });

        documentMutations.addDocuments(newDocuments);
        setNewDocuments(files);
      } catch (error) {
        setAttachError({
          id: +new Date(),
          details: error as Error,
        });
      }
      // allow select the same file again with trigger onChange
      event.target.value = null as any;
    },
    [clearDocumentAttacherState]
  );

  return {
    attachDocuments,
    error: attachError,
    newDocuments,
    clearDocumentAttacherState,
  };
}

export default useDocumentAttacher;
