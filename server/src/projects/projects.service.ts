import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectDto } from '@portfolio/shared';

@Injectable()
export class ProjectsService {
  getProjectNames() {
    const projectNames: string[] = projectsList.map((p: ProjectDto) => {
      return p.name;
    });

    return  projectNames;
  }

  getProjectInfo(slug: string): ProjectDto {
    const projectInfo = projectsList.find(project => project.slug === slug);
    if (!projectInfo) {
      throw NotFoundException;
    }
    return projectInfo;
  }
}

const projectsList: ProjectDto[] = [
  {
    id: 1,
    name: 'Portfolio',
    description: 'This is the portfolio that you are currently viewing. It was heavily inspired by the rust crate "ratatui" to give it a distinct cli look and feel. The color scheme is loosely based off of the Ariake Dark scheme and styling has been adapted for the web.',
    progress: 40,
    techStack: ['React', 'nestjs', 'Typescript'],
    slug: 'portfolio'
  },
  {
    id: 2,
    name: 'System Monitor',
    description: 'My first firmware project written in rust. It\'s a firmware project written in rust to gather and display system information and diagnostics such as temperatures, ram usage, disk space, and internet connection quality. It is technically 2 separate programs, one is a host program that gathers data and sends that data to the pico, and the other is firmware that runs on a raspberry pi pico, which takes the data it is sent by the host program and displays it on a small monitor using the embedded graphics crate.',
    progress: 60,
    techStack: ['rust', 'embassy', 'raspberry pi pico', 'embedded-graphics'],
    slug: 'system-monitor'
  }
]
