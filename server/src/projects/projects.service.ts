import { Injectable } from '@nestjs/common';
import { ProjectDto } from '@portfolio/shared';

@Injectable()
export class ProjectsService {
  getProjects() {
    const myProject: ProjectDto[] = [
      {
        name: 'example',
        description: 'This is not a real project'
      }
    ];
    return myProject;
  }
}
