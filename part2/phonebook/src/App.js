import React, { useState } from 'react'

import { handleChange } from './utils'
import { Persons } from './components/Persons'
import { Title } from './components/Title'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()

    const newObject = { 'name': newName }
    setPersons(persons.concat(newObject))
    setNewName('')
  }


  return (
    <div>
      <div>
        <Title name={'Phonebook'} />
        <form onSubmit={handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleChange(setNewName)} />
          </div>
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
