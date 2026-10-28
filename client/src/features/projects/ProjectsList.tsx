import React from 'react';
import { useProjects } from './useProjects';

export const ProjectsList = (): React.JSX.Element => {
  const { data, isLoading, err } = useProjects();
  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message} </p>;
  return (
    <ul>
      {data.map((val) => (
        <li key={val.id}>
          <h5>{val.name}</h5>
          <p>{val.description}</p>
        </li>
      ))}
    </ul>
  );
};
