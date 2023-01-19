import { AccessControl, accessTable, Method } from './access-table';

/**
 * @deprecated RBAC now handles on BE
 */
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
