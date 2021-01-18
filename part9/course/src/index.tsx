import React from 'react';
import ReactDOM from 'react-dom';

import Contents from './components/Contents';
import Header from './components/Header';
import Total from './components/Total';
import CoursePart from './types';

const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  }
];

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const number = courseParts.reduce(
    (carry, part) => carry + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />
      <Contents courseParts={courseParts} />
      <Total number={number} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
