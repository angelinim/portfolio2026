export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  progress: number;
  techStack: string[];
  githubLink?: string;
  imageUrls?: string[];
}
