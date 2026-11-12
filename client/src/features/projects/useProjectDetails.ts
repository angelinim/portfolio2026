import type { ProjectDto } from '@portfolio/shared';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from './api';

export const useProjectDetails = (slug: string) => {
  const [data, setData] = useState<ProjectDto>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await getProjectBySlug(slug);
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
    void getDetails();
  }, [slug]);
  return { data, isLoading, err };
};
