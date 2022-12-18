import { RolesContext } from '../types';

interface AccessControl extends RolesContext {
  anonymous?: boolean;
}

type Method = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface AccessTable {
  readonly [path: string]: {
    [method in Method]?: AccessControl;
  } & AccessControl;
}

const accessTable: AccessTable = {
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

export function getACL(path: string, method?: string) {
  const p = path.startsWith('/') ? path.slice(1) : path;
  const pathACL = accessTable[p];
  if (!pathACL) {
    // TODO add log
    return {};
  }
  const pathRootACL: AccessControl = {
    admin: pathACL.admin,
    gvcn: pathACL.gvcn,
    gvu: pathACL.gvu,
    anonymous: pathACL.anonymous,
  };
  if (!method) {
    return pathRootACL;
  }
  const methodACL = pathACL?.[<Method>method];
  if (!methodACL) {
    return pathRootACL;
  }
  const merged = { ...pathRootACL, ...methodACL };
  return merged;
}

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
