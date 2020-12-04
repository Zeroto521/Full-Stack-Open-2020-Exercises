import { Title } from './Title'

const Anecdote = (props) => {
    const { name, anecdote, point } = props

    return (
        <div>
            <Title name={name} />
            <p>
                {anecdote}
            </p>
            <p>
                This anecdote has {point} votes.
            </p>
        </div>
    )
}

export { Anecdote }