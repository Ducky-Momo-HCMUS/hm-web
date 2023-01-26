import { Button, Box } from '@mui/material';
import React, { useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { StyledTitle } from '../../components/styles';
import { useTagListQuery } from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';

import TagTable from './TagTable';
import AddOrEditTagInfoDialog from './AddOrEditTagInfoDialog';

function ManageTag() {
  const [openAddOrEditTagInfoDialog, setOpenAddOrEditTagInfoDialog] =
    useState(false);

  const handleOpenAddOrEditTagInfoDialog = () => {
    setOpenAddOrEditTagInfoDialog(true);
  };

  const handleCloseAddOrEditTagInfoDialog = () => {
    setOpenAddOrEditTagInfoDialog(false);
  };

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <StyledTitle variant="h1">Quản lý tag</StyledTitle>
        <Box display="flex" gap={1}>
          <Button
            sx={{ textTransform: 'uppercase' }}
            variant="contained"
            onClick={handleOpenAddOrEditTagInfoDialog}
          >
            <AddIcon />
            Thêm tag
          </Button>
        </Box>
      </Box>
      <AsyncDataRenderer loading={tagListLoading} data={tagListData}>
        <TagTable data={tagList} />
      </AsyncDataRenderer>
      <AddOrEditTagInfoDialog
        open={openAddOrEditTagInfoDialog}
        onClose={handleCloseAddOrEditTagInfoDialog}
        onClickCancel={handleCloseAddOrEditTagInfoDialog}
        onClickConfirm={handleCloseAddOrEditTagInfoDialog}
      />
    </Box>
  );
}

export default ManageTag;
