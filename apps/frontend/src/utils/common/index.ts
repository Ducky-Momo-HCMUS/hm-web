// import { ApolloCache } from '@apollo/client';

import { Order } from '../../types';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// export function removeFromCache(
//   cache: ApolloCache<unknown>,
//   queryNamePattern: RegExp
// ) {
//   const queriedData = cache.extract()['ROOT_QUERY'];
//   if (queriedData) {
//     Object.keys(queriedData).forEach((key) => {
//       if (queryNamePattern.test(key)) {
//         cache.evict({ id: 'ROOT_QUERY', fieldName: key });
//       }
//     });
//   }
// }
