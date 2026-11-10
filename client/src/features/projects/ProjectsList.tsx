import React from 'react';
import { useProjectSummaries } from './useProjectSummaries';
import { useNavigate, useParams } from 'react-router';

export const ProjectsList = (): React.JSX.Element => {
  const params = useParams();
  const getSlug = () => {
    return params.slug != null ? params.slug : '';
  }
  const nav = useNavigate();
  const loadProjectDetails = (slug: string) => {
    void nav(slug);
  }

  const { data, isLoading, err } = useProjectSummaries();
  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message} </p>;
  return (
    <table className='projects-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Summary</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {data.map((projSummary) => (
          <tr className={`${projSummary.slug === getSlug() ? 'selected' : ''}`} key={projSummary.slug} onClick={() => loadProjectDetails(projSummary.slug)}>
            <td>{projSummary.name}</td>
            <td>{projSummary.summary}</td>
            <td>{projSummary.progress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
