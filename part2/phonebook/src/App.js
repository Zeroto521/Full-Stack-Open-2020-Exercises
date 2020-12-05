import React, { useState } from 'react'

import { handleChange } from './utils'
import { Persons } from './components/Persons'
import { Title } from './components/Title'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()

    const persons_names = persons.map(person => person.name)

    if (persons_names.includes(newName)) {
      alert(`${newName} is already added to phonebook.`)
    }
    else {
      const newObject = {
        'name': newName,
        'number': newNumber,
      }
      setPersons(persons.concat(newObject))
      setNewName('')
    }
  }


  return (
    <div>
      <div>
        <Title name={'Phonebook'} />
        <form onSubmit={handleSubmit}>
          <div>name: <input value={newName} onChange={handleChange(setNewName)} /></div>
          <div>number: <input value={newNumber} onChange={handleChange(setNewNumber)} /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <div>
        <Title name={'Numbers'} />
        <Persons persons={persons} />
      </div>
    </div>
  )

}

export default App
