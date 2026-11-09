import type { ProjectDto } from '@portfolio/shared';
import axios from 'axios';

export const getProjectNames = async () => {
  try {
    return (await axios.get<string[]>('/api/projects')).data;
  } catch (error) {
    // probably replace with real logging in future
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.message, { cause: error });
    } else {
      throw error;
    }
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    return await axios.get<ProjectDto>(`/api/projects/${slug}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message, { cause: error });
    } else {
      throw error;
    }
  }
};
