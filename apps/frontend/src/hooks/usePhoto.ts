import { useMutation, useQuery } from '@apollo/client';

import { ADD_PHOTO } from '../data/mutations/add-photo';
import { POSTS_QUERY } from '../data/queries/posts';
import {
  AddPhotoInput,
  AddPhotoMutation,
  MutationAddPhotoArgs,
  PostsQuery,
} from '../generated-types';

export const usePhoto = () => {
  const { data } = useQuery<PostsQuery>(POSTS_QUERY);
  const [mutateAddPhoto] = useMutation<AddPhotoMutation, MutationAddPhotoArgs>(
    ADD_PHOTO,
    {
      awaitRefetchQueries: true,
      refetchQueries: [{ query: POSTS_QUERY }],
    }
  );

  const addPhoto = async ({ file, name }: { file: File } & AddPhotoInput) => {
    await mutateAddPhoto({
      variables: {
        file,
        input: { name },
      },
    });
  };

  return {
    photos: data?.photos ?? [],
    addPhoto,
  };
};
