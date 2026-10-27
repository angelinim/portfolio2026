import type { ProjectDto } from "@portfolio/shared";
import { getProjects } from './api';
import { useState, useEffect } from "react";

export const useProjects = () => {
  const [data, setData] = useState<ProjectDto[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [err,setErr] = useState<Error | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProjects();
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
    }
    void getData();
  }, []);

  return { data, isLoading, err };
}
