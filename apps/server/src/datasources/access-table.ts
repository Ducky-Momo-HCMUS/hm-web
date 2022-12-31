import { RolesContext } from '../types';

/**
 * @deprecated RBAC now handles on BE
 */
export interface AccessControl extends RolesContext {
  anonymous?: boolean;
}

export type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

/**
 * @deprecated RBAC now handles on BE
 */
interface AccessTable {
  readonly [path: string]: {
    [method in Method]?: AccessControl;
  } & AccessControl;
}

/**
 * @deprecated RBAC now handles on BE
 */
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
  'v1/homerooms': {
    gvcn: true,
  },
  'v1/homerooms/:id': {
    gvcn: true,
  },
  'v1/homerooms/:id/terms': {
    gvcn: true,
  },
  'v1/homerooms/:id/fail': {
    gvcn: true,
  },
  'v1/homerooms/:id/not-enrolled': {
    gvcn: true,
  },
  'v1/homerooms/:id/postpone-exam': {
    gvcn: true,
  },
  'v1/homerooms/:id/students': {
    gvcn: true,
  },
  'v1/students/:id': {
    gvcn: true,
  },
  'v1/students/:id/subjects': {
    gvcn: true,
  },
  'v1/students/:id/drl': {
    gvcn: true,
  },
  'v1/students/:id/point': {
    gvcn: true,
  },
  'v1/students/:id/terms': {
    gvcn: true,
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
