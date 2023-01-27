import { Button, Box, Backdrop, CircularProgress } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { StyledTitle } from '../../components/styles';
import {
  TagAddInput,
  useTagAddMutation,
  useTagListQuery,
} from '../../generated-types';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import { GET_TAG_LIST } from '../../data/queries/tag/get-tag-list';

import TagTable from './TagTable';
import AddOrEditTagInfoDialog from './AddOrEditTagInfoDialog';

function ManageTag() {
  const [openAddTagInfoDialog, setOpenAddTagInfoDialog] = useState(false);

  const handleOpenAddTagInfoDialog = () => {
    setOpenAddTagInfoDialog(true);
  };

  const handleCloseAddTagInfoDialog = () => {
    setOpenAddTagInfoDialog(false);
  };

  const { data: tagListData, loading: tagListLoading } = useTagListQuery({});
  const tagList = useMemo(
    () => tagListData?.tagList.tags || [],
    [tagListData?.tagList.tags]
  );

  const [addTag, { loading: addTagLoading }] = useTagAddMutation();

  const handleAddTag = useCallback(
    async (payload: TagAddInput) => {
      setOpenAddTagInfoDialog(false);
      await addTag({
        variables: {
          payload,
        },
        refetchQueries: [{ query: GET_TAG_LIST }, 'TagList'],
      });
    },
    [addTag]
  );

  return (
    <>
      <Box display="flex" flexDirection="column" gap={1}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <StyledTitle variant="h1">Quản lý tag</StyledTitle>
          <Box display="flex" gap={1}>
            <Button
              sx={{ textTransform: 'uppercase' }}
              variant="contained"
              onClick={handleOpenAddTagInfoDialog}
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
          open={openAddTagInfoDialog}
          onClose={handleCloseAddTagInfoDialog}
          onClickCancel={handleCloseAddTagInfoDialog}
          onClickConfirm={handleAddTag}
        />
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addTagLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ManageTag;
