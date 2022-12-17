import React from 'react';

import { Photo } from '../../generated-types';

import { CardImage, Name, Wrapper } from './styles';

interface Props {
  className?: string;
  photo: Photo;
}

function PhotoCard({ className, photo }: Props) {
  return (
    <Wrapper className={className}>
      <CardImage image={photo.url} />
      <Name>{photo.name}</Name>
    </Wrapper>
  );
}

export default PhotoCard;
