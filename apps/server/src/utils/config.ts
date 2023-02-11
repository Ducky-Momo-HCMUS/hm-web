function getOrThrow(key: string) {
  const value = process.env[key];
  if (!value)
    throw ReferenceError(`Environment variable ${key} is not defined`);
  return value;
}

export const ACCOUNT_BASE_URL = getOrThrow('ACCOUNT_BASE_URL');
export const CORE_BASE_URL = getOrThrow('CORE_BASE_URL');
