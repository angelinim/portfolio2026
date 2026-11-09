import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import type { ProjectDto } from '@portfolio/shared';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjectNameList(): string[] {
    return this.projectsService.getProjectNames();
  }

  @Get(':slug')
  getProject(@Param('slug')slug: string): ProjectDto {
    try {
      return this.projectsService.getProjectInfo(slug);
    } catch (err) {
      console.log(err);
      throw err
    }
  }
}
