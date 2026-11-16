import { Navigate } from 'react-router';
import { Panel } from '../../components/tui/panel/Panel';
import { useProjectSummaries } from './useProjectSummaries';

export const SelectProjectHint = () => {
  const { data } = useProjectSummaries();
  if (data[0]) {
    return <Navigate to={data[0].slug} replace></Navigate>;
  }

  return (
    <Panel title="details" grow>
      <p className="a-hint">
        Select a project above to see details about that project
      </p>
    </Panel>
  );
};
