function getOrThrow(key: string) {
  const value = process.env[key];
  if (!value)
    throw ReferenceError(`Environment variable ${key} is not defined`);
  return value;
}

export const SERVICES_BASE_URL = getOrThrow('SERVICES_BASE_URL');
