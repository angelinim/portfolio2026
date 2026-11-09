import { getProjectNames } from './api';
import { useState, useEffect } from 'react';

export const useProjectsNameList = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProjectNames();
        setData(res);
      } catch (error) {
        if (error instanceof Error) {
          setErr(error);
        } else {
          setErr(new Error('an unexpected error has occured'));
        }
      } finally {
        setIsLoading(false);
      }
    };
    void getData();
  }, []);

  return { data, isLoading, err };
};
