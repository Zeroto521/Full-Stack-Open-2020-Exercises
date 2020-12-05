const Person = (props) => {
  const { person } = props
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

export { Person }
