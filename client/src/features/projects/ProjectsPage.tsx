import { Outlet } from 'react-router';
import { Panel } from '../../components/tui/panel/Panel';
import { ProjectsList } from './ProjectsList';
import './projectsPage.css';

export const ProjectsPage = () => (
  <div className="projects-split">
    <Panel title="Projects" grow>
      <ProjectsList></ProjectsList>
    </Panel>
    <Outlet/>
  </div>
);
