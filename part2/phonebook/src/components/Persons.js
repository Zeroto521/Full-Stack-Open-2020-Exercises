import { useEffect } from 'react'

import { Person } from './Person'
import Service from '../services'

const Persons = (props) => {
  const { persons, searchName, setPersons } = props

  useEffect(() => {
    Service.getAll().then(data => setPersons(data))
  }, [])

  return (
    <div>
      <table>
        <tbody>
          {
            persons.map((element) => {
              if (searchName.length === 0 || element.name.search(searchName) !== -1) {
                return (
                  <Person key={element.id} person={element} setPersons={setPersons} />
                )
              } else {
                return null
              }
            }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export { Persons }