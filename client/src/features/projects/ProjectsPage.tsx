import { Panel } from "../../components/tui/panel/Panel";
import { ProjectsList } from "./ProjectsList";

export const ProjectsPage = () => (
  <Panel title="Projects" grow>
    <ProjectsList></ProjectsList>
  </Panel>
);
