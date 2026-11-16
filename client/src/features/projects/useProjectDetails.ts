import type { ProjectDto } from '@portfolio/shared';
import { useEffect, useState } from 'react';
import { getProjectBySlug } from './api';

export const useProjectDetails = (slug: string) => {
  const [data, setData] = useState<ProjectDto>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    const getDetails = async () => {
      try {
        setIsLoading(true);
        const res = await getProjectBySlug(slug);
        if (ignore) return;
        setData(res);
        setErr(null);
      } catch (error) {
        if (ignore) return;
        if (error instanceof Error) {
          setErr(error);
        } else {
          setErr(new Error('an unexpected error has occured'));
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    };
    void getDetails();

    return () => {
      ignore = true;
    }
  }, [slug]);
  return { data, isLoading, err };
};
