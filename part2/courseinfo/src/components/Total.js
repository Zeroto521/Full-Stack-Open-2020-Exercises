const Total = (props) => {
  const total = props.exercises.reduce((s, p) => s + p)

  return (
    <p>
      <b>
        total of {total} exercises
      </b>
    </p>
  )
}

export { Total }
