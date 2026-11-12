import { NavLink } from 'react-router';
import './Tabs.css';

export const Tabs = () => (
  <nav className="tui-tabs">
    <NavLink className="tui-tab" to={'/'}>
      Summary
    </NavLink>
    <NavLink className="tui-tab" to={'/projects'}>
      Projects
    </NavLink>
    <NavLink className="tui-tab" to={'/experience'}>
      Experience
    </NavLink>
    <NavLink className="tui-tab" to={'/contact'}>
      Contact
    </NavLink>
  </nav>
);
