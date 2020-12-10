import React, { useState, useEffect } from 'react'

import { Filter } from './components/Filter'
import { Notification } from './components/Notification'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import { Title } from './components/Title'
import Service from './services'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSerachName] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const timer = 3000

  useEffect(() => {
    Service.getAll().then(data => setPersons(data))
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    const persons_names = persons.map(person => person.name)
    const message = `${newName} is already added to phonebook, replace the old number with a new one?`
    const newObject = {
      'name': newName,
      'number': newNumber,
    }

    if (persons_names.includes(newName) && window.confirm(message)) {
      const newObjectID = persons[persons_names.indexOf(newName)]['id']
      Service.update(newObjectID, newObject).then(data =>
        setPersons(persons.map(person => newObjectID !== person.id ? person : data))
      ).catch(error => {
        setErrorMessage(`Information of ${newName} has already been removed from server`)
        setTimeout(() => { setErrorMessage(null) }, 5000)
      })

      setMessage(`Added ${newName}`)
      setTimeout(() => { setMessage(null) }, timer)
    } else {
      Service.create(newObject).then(data => setPersons(persons.concat(newObject)))
      setNewName('')

      setMessage(`Added ${newName}`)
      setTimeout(() => { setMessage(null) }, timer)
    }
  }


  return (
    <div>
      <Title name={'Phonebook'} />
      {
        errorMessage &&
        <Notification message={errorMessage} error={true} />
      }
      {
        message &&
        <Notification message={message} />
      }
      <div>
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
        <Persons persons={persons} searchName={searchName} setPersons={setPersons} />
      </div>
    </div>
  )

}

export default App
