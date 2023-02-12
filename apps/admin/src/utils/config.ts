function getOrThrow(key: string) {
  const value = process.env[key];
  if (!value)
    throw ReferenceError(`Environment variable ${key} is not defined`);
  return value;
}

export const REACT_APP_GRAPHQL_URL = getOrThrow('REACT_APP_GRAPHQL_URL');
