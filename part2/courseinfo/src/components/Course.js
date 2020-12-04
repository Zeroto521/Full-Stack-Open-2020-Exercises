import { Content } from './Content'
import { Header } from './Header'
import { Total } from './Total'

const Course = (props) => {
    const { course, id } = props

    return (
        <div key={id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts.map(x => x['exercises'])} />
        </div>
    )
}

export { Course }