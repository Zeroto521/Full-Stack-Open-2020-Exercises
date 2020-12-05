import { handleChange } from '../utils'

const Filter = (props) => {
  const { searchName, setSerachName } = props

  return (
    <div>
      Filter shown with: <input value={searchName} onChange={handleChange(setSerachName)} />
    </div>
  )
}

export {Filter}