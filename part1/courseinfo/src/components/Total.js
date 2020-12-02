const Total = (props) => {
    const exercises = props.exercises

    return (
        <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    )
}

export { Total }
