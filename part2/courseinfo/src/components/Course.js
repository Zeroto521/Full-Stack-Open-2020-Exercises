import { Content } from './Content'
import { Header } from './Header'

const Course = (props) => {
    const { course } = props
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export { Course }