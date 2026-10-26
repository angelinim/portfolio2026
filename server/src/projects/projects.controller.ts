import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from '@portfolio/shared';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjects(): ProjectDto[] {
    return this.projectsService.getProjects();
  }
}
