/* eslint-disable @typescript-eslint/no-explicit-any */

export const getStorageData = <ResponseType>(
  key: string
): ResponseType | null => {
  const storageData = localStorage.getItem(key);

  try {
    if (!storageData) return null;
    return JSON.parse(storageData);
  } catch (e) {
    console.error(e);
  }

  return null;
};

export const setStorageData = <DataType extends any>(
  key: string,
  data: DataType
): void => {
  const storageData = JSON.stringify(data);

  localStorage.setItem(key, storageData);
};
