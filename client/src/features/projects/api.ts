import type { ProjectDto, ProjectSummaryDto } from '@portfolio/shared';
import axios from 'axios';

export const getProjectSummaries = async () => {
  try {
    return (await axios.get<ProjectSummaryDto[]>('/api/projects')).data;
  } catch (error) {
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
