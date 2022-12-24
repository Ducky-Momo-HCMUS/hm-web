import React from 'react';
import { Box, Typography } from '@mui/material';

interface ContentRowProps {
  title: string;
  titleWidth: number;
  description: string;
  descriptionWidth: number;
}

function ContentRow({
  title,
  titleWidth,
  description,
  descriptionWidth,
}: ContentRowProps) {
  return (
    <Box>
      <Typography sx={{ width: `${titleWidth}` }}>{title}</Typography>
      <Typography sx={{ width: `${descriptionWidth}` }}>
        {description}
      </Typography>
    </Box>
  );
}

export default ContentRow;
