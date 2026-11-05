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
      <div className="tui-main-container">
        <div className="tui-block tui-flex-1">
          <div className="tui-block-title">Projects</div>
          <div className="tui-block-content">
            <ProjectsList />
          </div>
        </div>
      </div>
      <Panel>
        <StatusBar />
      </Panel>
    </>
  );
}

export default App;
