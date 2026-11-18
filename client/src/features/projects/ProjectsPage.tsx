import { Outlet } from 'react-router';
import { Panel } from '../../components/tui/panel/Panel';
import { PageTitle } from '../../components/PageTitle';
import { ProjectsList } from './ProjectsList';
import './projectsPage.css';

export const ProjectsPage = () => (
  <>
    {/* Outside .projects-split so the `:first-child` panel rule still matches */}
    <PageTitle title="Projects" />
    <div className="projects-split">
      <Panel title="Projects" compact>
        <ProjectsList></ProjectsList>
      </Panel>
      <Outlet />
    </div>
  </>
);
