const Part = (props) => {
    const { part} = props

    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

export { Part }
