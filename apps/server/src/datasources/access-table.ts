import { RolesContext } from '../types';

export interface AccessControl extends RolesContext {
  anonymous?: boolean;
}

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface AccessTable {
  readonly [path: string]: {
    [method in Method]?: AccessControl;
  } & AccessControl;
}

export const accessTable: AccessTable = {
  'v1/login': {
    anonymous: true,
  },
  'v1/forgot-password': {
    anonymous: true,
  },
  'v1/reset-password': {
    anonymous: true,
  },
  'v1/accounts/edit-password': {
    admin: true,
    gvcn: true,
    gvu: true,
  },
};

function verifyAccessTable() {
  Object.keys(accessTable).forEach((path) => {
    if (path.startsWith('/')) {
      const correct = path.slice(1);
      throw SyntaxError(
        `Invalid path ${path} in AccessTable. Please change it into ${correct}`
      );
    }
  });
}

verifyAccessTable();
