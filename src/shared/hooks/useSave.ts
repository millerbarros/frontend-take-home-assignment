import { useState } from 'react';

// HELPERS
import { setStorageData } from '../helpers/storage';

enum RequestStatus {
  IDLE = 1,
  SAVING,
  SUCCESS,
  FAILURE
}

interface UseSaveResponse<DataType> {
  isSaving: boolean;
  save: (data: DataType) => void;
}

export const useSave = <DataType>(path: string): UseSaveResponse<DataType> => {
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE);

  const isSaving = status === RequestStatus.SAVING;

  const save = (data: DataType) => {
    setStatus(RequestStatus.SAVING);

    setStorageData(path, data);

    setStatus(RequestStatus.SUCCESS);
  };

  return {
    isSaving,
    save
  };
};
