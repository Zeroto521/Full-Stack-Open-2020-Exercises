import { Statistic } from './Statistic'
import { Title } from './Title'

const Statistics = (props) => {
    const { name, good, neutral, bad } = props
    const all = good + bad + neutral

    if (all === 0) {
        return (
            <div>
                <Title name={name} />
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <Title name={name} />

            <table>
                <tbody>
                <Statistic text={'good'} value={good} />
                <Statistic text={'neutral'} value={neutral} />
                <Statistic text={'bad'} value={bad} />
                <Statistic text={'all'} value={all} />
                <Statistic text={'average'} value={(good - bad) / all} />
                <Statistic text={'positive'} value={String(good / all * 100) + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

export { Statistics }