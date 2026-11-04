import './App.css';
import { ProjectsList } from './features/projects/ProjectsList';

function App() {
  return (
    <>
      <div className="tui-block">
        <div className="tui-tabs">
          <div className="tui-tab ">[ Summary ]</div>
          <div className="tui-tab active">[ Projects ]</div>
          <div className="tui-tab">[ Experience ]</div>
          <div className="tui-tab">[ Contact ]</div>
        </div>
      </div>
      <div className="tui-main-container">
        <div className="tui-block tui-flex-1">
          <div className="tui-block-title">Projects</div>
          <div className="tui-block-content">
            {/*this section will display whatever is in the tab that's selected*/}
            <ProjectsList />
          </div>
        </div>
      </div>
      <div className="tui-block" style={{ marginTop: '5ch' }}>
        <div className="tui-statusbar">
          <div>
            [ © 2026 <span className="a-string">Michael Angelini</span> ]
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
