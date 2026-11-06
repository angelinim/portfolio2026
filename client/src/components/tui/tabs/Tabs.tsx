import { Link } from 'react-router';
import './Tabs.css';

export const Tabs = () => (
  <nav className="tui-tabs">
    <Link className="tui-tab " to={''}>[ Summary ]</Link>
    <Link className="tui-tab active" to={''}>[ Projects ]</Link>
    <Link className="tui-tab" to={''}>[ Experience ]</Link>
    <Link className="tui-tab" to={''}>[ Contact ]</Link>
  </nav>
);
