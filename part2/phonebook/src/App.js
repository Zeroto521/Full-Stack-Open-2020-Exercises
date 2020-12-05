import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { Title } from './components/Title'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSerachName] = useState('')

  const data_url = 'http://localhost:3001/persons'

  useEffect(() => {
    axios
      .get(data_url)
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
        <Filter searchName={searchName} setSerachName={setSerachName} />
      </div>

      <div>
        <Title name={'Add a new'} />
        <PersonForm handleSubmit={handleSubmit}
          newName={newName} setNewName={setNewName}
          newNumber={newNumber} setNewNumber={setNewNumber} />
      </div>

      <div>
        <Title name={'Numbers'} />
        <Persons persons={persons} searchName={searchName} />
      </div>
    </div>
  )

}

export default App
