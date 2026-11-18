import React from 'react';
import { useProjectSummaries } from './useProjectSummaries';
import { Link, useNavigate, useParams } from 'react-router';

export const ProjectsList = (): React.JSX.Element => {
  const params = useParams();
  const getSlug = () => {
    return params.slug ?? '';
  };
  const nav = useNavigate();
  const loadProjectDetails = (slug: string) => {
    void nav(slug);
  };

  const { data, isLoading, err } = useProjectSummaries();
  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message} </p>;
  return (
    <table className="projects-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Summary</th>
          <th scope="col">Progress</th>
        </tr>
      </thead>
      <tbody>
        {data.map((projSummary) => (
          <tr
            className={`${projSummary.slug === getSlug() ? 'selected' : ''}`}
            key={projSummary.slug}
            onClick={() => loadProjectDetails(projSummary.slug)}
          >
            <td>
              <Link
                to={projSummary.slug}
                onClick={(event) => event.stopPropagation()}
                aria-current={
                  projSummary.slug === getSlug() ? 'page' : undefined
                }
              >
                {projSummary.name}
              </Link>
            </td>
            <td>{projSummary.summary}</td>
            <td>{projSummary.progress}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
