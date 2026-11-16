import { Link, useParams } from 'react-router';
import { Panel } from '../../components/tui/panel/Panel';
import './projectDetails.css';

export const ProjectNotFound = () => {
  const { slug } = useParams();

  return (
    <Panel title="details" grow>
      <p className="project-error-heading">
        <span className="a-warn">error</span>
        <span className="a-comment">: </span>
        project not found
      </p>
      <dl className="project-details">
        <dt className="a-keyword">Requested:</dt>
        <dd className="a-string">{slug}</dd>

        <dt className="a-keyword">Hint:</dt>
        <dd>
          Pick a project from the table above, or{' '}
          <Link className="a-string" to="/projects">
            open the first project
          </Link>
          .
        </dd>
      </dl>
    </Panel>
  );
};
