import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import type { ProjectDto, ProjectSummaryDto } from '@portfolio/shared';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  getProjectNameList(): ProjectSummaryDto[] {
    return this.projectsService.getProjectSummaries();
  }

  @Get(':slug')
  getProject(@Param('slug') slug: string): ProjectDto {
    return this.projectsService.getProjectInfo(slug);
  }
}
