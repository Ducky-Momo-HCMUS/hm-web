import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { SetStateAction } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';

registerPlugin(FilePondPluginFileValidateType);

interface ImportAccountInfoDialogProps {
  open: boolean;
  onClose: any;
  onClickCancel: any;
  onClickConfirm: any;
  file: File | undefined;
  setFile: React.Dispatch<SetStateAction<File | undefined>>;
}

function ImportAccountInfoDialog({
  open,
  onClose,
  onClickCancel,
  onClickConfirm,
  file,
  setFile,
}: ImportAccountInfoDialogProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Import tài khoản</DialogTitle>
      <DialogContent>
        <Box width="25vw">
          <FilePond
            required
            allowReplace
            maxFiles={1}
            files={file as any}
            onupdatefiles={setFile as any}
            server={{
              load: (source, load) => {
                const myRequest = new Request(source);
                fetch(myRequest).then((response) => {
                  response.blob().then((myBlob) => {
                    load(myBlob);
                  });
                });
              },
            }}
            name="files"
            labelIdle="Kéo thả hoặc đính kèm file tại đây"
          />
        </Box>
        <DialogActions>
          <Button onClick={onClickCancel}>Hủy</Button>
          <Button color="primary" variant="contained" onClick={onClickConfirm}>
            Thêm
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default ImportAccountInfoDialog;
