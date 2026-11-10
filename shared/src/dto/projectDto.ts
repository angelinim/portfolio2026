export interface ProjectDto {
  name: string;
  summary: string;
  description: string;
  progress: number;
  techStack: string[];
  slug: string;
  githubLink?: string;
  imageUrls?: string[];
}

export type ProjectSummaryDto = Pick<
  ProjectDto,
  'slug' | 'name' | 'summary' | 'progress'
>;
