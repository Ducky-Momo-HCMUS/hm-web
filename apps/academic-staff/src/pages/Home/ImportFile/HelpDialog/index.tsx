/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

interface HelpDialogProps {
  openHelpDialog: boolean;
  onClose: any;
}

function HelpDialog({ openHelpDialog, onClose }: HelpDialogProps) {
  return (
    <Dialog open={openHelpDialog} onClose={onClose}>
      <DialogTitle display="flex" alignItems="center">
        <HelpOutlineOutlinedIcon fontSize="large" />{' '}
        <Typography
          sx={{ marginLeft: '0.25rem' }}
          variant="h6"
          component="span"
        >
          Hướng dẫn sử dụng
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ marginLeft: '1.5rem' }}>
        <List
          sx={{
            listStyleType: 'number',
            '& .MuiListItem-root': {
              display: 'list-item',
            },
          }}
        >
          <ListItem>
            <ListItemText>
              Bản xem trước sẽ được hiển thị bắt đầu từ giá trị của Hàng tiêu đề
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Các cột sẽ được gắn các key mặc định tương ứng với header của từng
              cột dựa trên file mẫu do người dùng cung cấp cho hệ thống.
              <br />
              <b>VD</b>: Đối với cột có tên "Họ và tên" thì sẽ để key tương ứng
              là HO_TEN
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Người dùng cần kiểm tra các key đã ở đúng tiêu đề (header) tương
              ứng. Mọi sự nhầm lẫn sẽ gây ảnh hưởng đến dữ liệu hệ thống và
              không thể khôi phục được
            </ListItemText>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Đóng</Button>
      </DialogActions>
    </Dialog>
  );
}

export default HelpDialog;
