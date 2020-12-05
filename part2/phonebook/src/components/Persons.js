import { Person } from './Person'

const Persons = (props) => {
  return (
    <div>
      <table>
        <tbody>
          {
            props.persons.map((element, key) =>
              <Person key={key} person={element} />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export { Persons }