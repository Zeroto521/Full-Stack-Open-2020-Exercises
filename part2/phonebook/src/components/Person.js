import Service from '../services'

const Person = (props) => {
  const { person, setPersons } = props

  const handle = () => {
    const message = `Delete ${person.name}`

    if (window.confirm(message)) {
      Service.delete(person.id)
      Service.getAll().then(data => setPersons(data))
    }
  }

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={handle} >Delete</button></td>
    </tr>
  )
}

export { Person }
