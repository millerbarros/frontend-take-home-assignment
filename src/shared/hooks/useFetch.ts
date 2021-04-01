import { useEffect, useState } from 'react';

// HELPERS
import { getStorageData } from '../helpers/storage';

enum RequestStatus {
  FETCHING = 1,
  SUCCESS,
  FAILURE
}

interface UseFetchResponse<DataType> {
  isFetching: boolean;
  data: DataType | null;
  fetchData: () => void;
}

export const useFetch = <DataType>(
  path: string,
  initialFetching = true
): UseFetchResponse<DataType> => {
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.FETCHING);
  const [data, setData] = useState<DataType | null>(null);

  const isFetching = status === RequestStatus.FETCHING;

  const fetchData = (): DataType | null => {
    const storageData = getStorageData<DataType>(path);

    setData(storageData);
    setStatus(RequestStatus.SUCCESS);

    return storageData;
  };

  useEffect(() => {
    if (!initialFetching) return;

    fetchData();
  }, [initialFetching]);

  return {
    isFetching,
    data,
    fetchData
  };
};
