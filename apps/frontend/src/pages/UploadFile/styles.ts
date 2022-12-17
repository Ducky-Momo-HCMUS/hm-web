import { Button, Typography } from '@mui/material';
import styled from 'styled-components';

export const Form = styled.form`
  border-bottom: 1px solid #ddd;
  margin: 48px 0;
  padding-bottom: 48px;
  width: 100%;
  height: 180px;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 312px);
  height: 100%;
`;

export const ImageField = styled.div<{ src?: string }>`
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  border: solid 1px #bbb;
  cursor: pointer;
  display: flex;
  margin-right: 32px;
  width: 280px;
  height: 180px;
  &:hover {
    border: solid 1px #000;
  }
  &:focus {
    border: solid 1px #1a237e;
    outline: none;
  }
`;

export const ImageFieldLabel = styled(Typography)`
  color: #777;
  margin: auto;
`;

export const UploadButton = styled(Button)`
  padding: 12px;
`;

export const PhotoList = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 32px;
  grid-template-columns: repeat(auto-fill, 280px);
`;
