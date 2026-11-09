export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  progress: number;
  techStack: string[];
  slug: string;
  githubLink?: string;
  imageUrls?: string[];
}
