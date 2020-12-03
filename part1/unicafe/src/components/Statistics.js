import { Counter } from './Counter'
import { Title } from './Title'

const Statistics = (props) => {
    const { name, good, neutral, bad } = props
    const all = good + bad + neutral

    return (
        <div>
            <Title name={'statistics'} />
            <Counter name={'good'} number={good} />
            <Counter name={'neutral'} number={neutral} />
            <Counter name={'bad'} number={bad} />
            <Counter name={'all'} number={all} />
            <Counter name={'average'} number={(good - bad) / all} />
            <Counter name={'positive'} number={String(good / all * 100) + ' %'} />
        </div>
    )
}

export { Statistics }