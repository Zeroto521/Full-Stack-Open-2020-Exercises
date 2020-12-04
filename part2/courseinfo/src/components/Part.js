const Part = (props) => {
    return (
        <p key={props.id}>
            {props.name} {props.exercises}
        </p>
    )
}

export { Part }
