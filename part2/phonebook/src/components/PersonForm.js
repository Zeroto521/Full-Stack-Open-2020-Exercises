
import { handleChange } from '../utils'

const PersonForm = (props) => {
  const { handleSubmit, newName, setNewName, newNumber, setNewNumber } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChange(setNewName)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleChange(setNewNumber)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export { PersonForm }
