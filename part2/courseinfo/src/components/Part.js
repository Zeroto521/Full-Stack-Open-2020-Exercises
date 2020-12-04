const Part = (props) => {
    const { part, id } = props

    return (
        <p key={id}>
            {part.name} {part.exercises}
        </p>
    )
}

export { Part }
