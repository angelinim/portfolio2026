import { Outlet } from 'react-router';
import { Panel } from './tui/panel/Panel';
import { StatusBar } from './tui/status-bar/StatusBar';
import { Tabs } from './tui/tabs/Tabs';

export const Layout = () => (
  <>
    <Panel compact>
      <Tabs />
    </Panel>
    <Outlet />
    <Panel compact>
      <StatusBar />
    </Panel>
  </>
);
