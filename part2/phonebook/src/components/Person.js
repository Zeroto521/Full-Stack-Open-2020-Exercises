const Person = (props) => {
  const { person } = props
  return (
    <tr>
      <td>{person.name}</td>
    </tr>
  )
}

export { Person }
