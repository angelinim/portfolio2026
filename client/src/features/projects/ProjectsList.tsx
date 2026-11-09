import React from 'react';
import { useProjectSummaries } from './useProjectSummaries';

export const ProjectsList = (): React.JSX.Element => {
  const { data, isLoading, err } = useProjectSummaries();
  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message} </p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Summary</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {data.map((projSummary) => (
          <tr>
            <td>{projSummary.name}</td>
            <td>{projSummary.summary}</td>
            <td>{projSummary.progress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
