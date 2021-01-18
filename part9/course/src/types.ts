interface CoursePartBase {
  name: string;
  exerciseCount: number;
  description: string;
}

interface CoursePartOne extends CoursePartBase {
  name: "Fundamentals";
}

interface CoursePartTwo extends Omit<CoursePartBase, "description"> {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

export default CoursePart;
export type { CoursePartOne, CoursePartTwo, CoursePartThree };
