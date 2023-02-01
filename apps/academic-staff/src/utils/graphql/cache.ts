import { InMemoryCache, makeVar } from '@apollo/client';

export const documentsVar = makeVar<File[]>([]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        documents: {
          read() {
            return documentsVar();
          },
        },
      },
    },
  },
});

export default cache;
