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

    Service.query(newName).then(person => {
      const newObject = {
        'name': newName,
        'number': newNumber,
      }

      if (person) {
        const message = `${newName} is already added to phonebook, replace the old number with a new one?`
        if (window.confirm(message)) {
          Service.update(person.id, newObject).then(() => {
            Service.getAll().then(data => setPersons(data))
            setMessage(`Added ${newName}`)
            setTimeout(() => setMessage(null), timer)
          }).catch(error => {
            setErrorMessage(error.response.data.error)
            setTimeout(() => setErrorMessage(null), timer)
          })
        }
      } else {
        Service.create(newObject).then(() => {
          Service.getAll().then(data => setPersons(data))
          setNewName('')
          setMessage(`Added ${newName}`)
          setTimeout(() => setMessage(null), timer)
        }).catch(error => {
          setErrorMessage(error.response.data.error)
          setTimeout(() => setErrorMessage(null), timer)
        })
      }
    })
  }


  return (
    <div>
      <Title name={'Phonebook'} />
      {
        message &&
        <Notification message={message} />
      }
      {
        errorMessage &&
        <Notification message={errorMessage} error={true} />
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
