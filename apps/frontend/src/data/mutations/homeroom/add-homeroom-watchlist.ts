import { gql } from '@apollo/client';

export const ADD_HOMEROOM_WATCHLIST = gql`
  mutation HomeroomAddWatchlist($payload: HomeroomAddWatchlistInput!) {
    homeroomAddWatchlist(payload: $payload) {
      status
    }
  }
`;
