import { Link } from 'react-router';
import './Tabs.css';

export const Tabs = () => (
  <nav className="tui-tabs">
    <Link className="tui-tab" to={'/'}>[ Summary ]</Link>
    <Link className="tui-tab" to={'/projects'}>[ Projects ]</Link>
    <Link className="tui-tab" to={'/experience'}>[ Experience ]</Link>
    <Link className="tui-tab" to={'/contact'}>[ Contact ]</Link>
  </nav>
);
