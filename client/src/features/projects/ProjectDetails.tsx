import { useParams } from 'react-router';
import { Panel } from '../../components/tui/panel/Panel';
import { useProjectDetails } from './useProjectDetails';
import './projectDetails.css';
import { Gauge } from '../../components/tui/guage/Guage';
import { ProjectNotFound } from './ProjectNotFound';
import axios from 'axios';

export const ProjectDetails = () => {
  const params = useParams();
  const getSlug = () => {
    return params.slug ?? '';
  };

  const { data, isLoading, err } = useProjectDetails(getSlug());
  if (isLoading)
    return (
      <Panel title="details" grow>
        <p>Loading...</p>
      </Panel>
    );
  if (err) {
    if (
      axios.isAxiosError(err.cause) &&
      err.cause.status &&
      err.cause.status === 404
    ) {
      return <ProjectNotFound />;
    }
    return (
      <Panel title="ERR:" grow>
        <p>Error: {err.message} </p>
      </Panel>
    );
  }

  return (
    <Panel title="details" grow>
      <dl className="project-details">
        <dt className="a-keyword">Name:</dt>
        <dd className="a-string">{data?.name}</dd>

        <dt className="a-keyword">Description:</dt>
        <dd className="text-under-dd">{data?.description}</dd>

        <dt className="a-keyword">Tech Stack:</dt>
        <dd>
          <ul className="project-tags">
            {data?.techStack.map((tech) => (
              <li key={tech} className="a-string">
                {tech}
              </li>
            ))}
          </ul>
        </dd>

        <dt className="a-keyword">Progress:</dt>
        <dd className="a-number">
          <Gauge percentCompleted={data?.progress ?? 0} /> {data?.progress}%
        </dd>

        <dt className="a-keyword">Github:</dt>
        <dd>
          {data?.githubLink ? (
            <a className="a-string" href={data.githubLink}>
              {data.githubLink}
            </a>
          ) : (
            <span className="a-hint">not available</span>
          )}
        </dd>
      </dl>
    </Panel>
  );
};
