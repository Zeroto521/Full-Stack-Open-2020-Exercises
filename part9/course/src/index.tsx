import React from "react";
import ReactDOM from "react-dom";

const courseParts = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
  },
];

const Header: React.FC<{ name: string }> = ({ name }) => <h1>{name}</h1>;

interface CoursePart {
  name: string;
  exerciseCount: number;
}

const Content: React.FC<{ coursePart: CoursePart }> = ({ coursePart }) => (
  <p>
    {coursePart.name} {coursePart.exerciseCount}
  </p>
);

const Contents: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => (
  <div>
    {courseParts.map((c) => (
      <Content coursePart={c} />
    ))}
  </div>
);

const Total: React.FC<{ number: number }> = ({ number }) => (
  <p>Number of exercises number {number}</p>
);

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
