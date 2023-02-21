import { gql } from '@apollo/client';

export const DELETE_HOMEROOM_WATCHLIST = gql`
  mutation HomeroomDeleteWatchlist($payload: HomeroomDeleteWatchlistInput!) {
    homeroomDeleteWatchlist(payload: $payload) {
      status
    }
  }
`;
