import { Panel } from '../../components/tui/panel/Panel';
import './experiencePage.css';
import './experience';

export const ExperiencePage = () => (
  <div className="experience-split">
    <Panel title="Companies">
      <ul className="company-list">
        <li>company 1</li>
        <li>company 2</li>
        <li>company 3</li>
      </ul>
    </Panel>
    <Panel title="Details" grow>
      <p>example text</p>
    </Panel>
  </div>
);
