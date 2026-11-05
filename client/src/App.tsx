import { Panel } from './components/tui/panel/Panel';
import { StatusBar } from './components/tui/status-bar/StatusBar';
import { Tabs } from './components/tui/tabs/Tabs';
import { ProjectsList } from './features/projects/ProjectsList';

function App() {
  return (
    <>
      <Panel>
        <Tabs />
      </Panel>
      <Panel title="Projects" grow hasTopMargin>
        <ProjectsList />
      </Panel>
      <Panel hasTopMargin>
        <StatusBar />
      </Panel>
    </>
  );
}

export default App;
