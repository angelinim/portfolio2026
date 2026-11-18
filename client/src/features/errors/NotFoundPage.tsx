import { Panel } from '../../components/tui/panel/Panel';
import { PageTitle } from '../../components/PageTitle';

export const NotFoundPage = () => (
  <>
    <PageTitle title="Page not found" />
    <Panel title="Error" grow>
      <h2>404 - Not Found!</h2>
      <p>We could not find the page you were looking for :(</p>
    </Panel>
  </>
);
