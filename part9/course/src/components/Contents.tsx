import React from 'react';

import CoursePart from '../types';

const Part: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => {
  if (coursePart.name === "Using props to pass data") {
    return (
      <tr>
        <td>{coursePart.name}</td>
        <td>{coursePart.exerciseCount}</td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{coursePart.name}</td>
      <td>{coursePart.exerciseCount}</td>
      <td>{coursePart.description}</td>
    </tr>
  )
};

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => (
  <table>
    <thead>
      <tr>
        <td>name</td>
        <td>exerciseCount</td>
        <td>description</td>
      </tr>
    </thead>
    <tbody>
      {
        courseParts.map((c, i) => (
          <Part key={i} coursePart={c} />
        ))
      }
    </tbody>
  </table>
);

export default Content;
