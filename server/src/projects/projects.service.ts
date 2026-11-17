import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto, ProjectSummaryDto } from '@portfolio/shared';

@Injectable()
export class ProjectsService {
  getProjectSummaries() {
    const projectSummaries: ProjectSummaryDto[] = projectsList.map(
      (p: ProjectDto) => {
        const summary: ProjectSummaryDto = {
          name: p.name,
          slug: p.slug,
          summary: p.summary,
          progress: p.progress,
        };
        return summary;
      },
    );
    return projectSummaries;
  }

  getProjectInfo(slug: string): ProjectDto {
    const projectInfo = projectsList.find((project) => project.slug === slug);
    if (!projectInfo) {
      throw new NotFoundException(
        `Could not find the specified project for ${slug}`,
      );
    }
    return projectInfo;
  }
}

const projectsList: ProjectDto[] = [
  {
    name: 'Portfolio',
    description:
      'This is the portfolio that you are currently viewing. It was heavily inspired by the rust crate "ratatui" to give it a distinct cli look and feel. The color scheme is loosely based off of the Ariake Dark scheme and styling has been adapted for the web.',
    progress: 40,
    techStack: ['React', 'NestJs', 'Typescript'],
    slug: 'portfolio',
    summary: 'Portfolio that lists recent projects and experience',
    githubLink: 'https://github.com/angelinim/portfolio2026',
  },
  {
    name: 'System Monitor',
    description:
      'My first firmware project written in rust. It gathers and displays system information and diagnostics such as temperatures, ram usage, disk space, and internet connection quality. It is technically 2 separate programs, one is a host program that gathers data and sends that data to a Raspberry Pi Pico, and the other is firmware that runs on the Raspberry Pi, which takes the data it is sent by the host program and displays it on a small monitor using the embedded graphics crate.',
    progress: 60,
    techStack: ['Rust', 'Embassy', 'Raspberry Pi Pico', 'Embedded Graphics'],
    slug: 'system-monitor',
    summary:
      'Firmware project that displays system diagnostics on small monitor from raspbery pi',
    githubLink: 'https://github.com/angelinim/System-Monitor',
  },
];
