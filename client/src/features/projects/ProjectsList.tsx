import React from 'react';
import { useProjectsNameList } from './useProjectsNameList';

export const ProjectsList = (): React.JSX.Element => {
  const { data, isLoading, err } = useProjectsNameList();
  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err.message} </p>;
  return (
    <ul>
      {data.map((projName) => (
        <li key={projName}>
          <h5>{projName}</h5>
        </li>
      ))}
    </ul>
  );
};
