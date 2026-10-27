import type { ProjectDto } from "@portfolio/shared";
import axios from "axios";

export const getProjects = async () => {
  try {
    return (await axios.get<ProjectDto[]>('/api/projects')).data;
  } catch (error) {
    // probably replace with real logging in future
    console.log(error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.message, {cause: error});
    } else {
      throw error;
    }
  }
}
