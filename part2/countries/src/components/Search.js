const Search = (props) => {
  const { searchName, setSerachName } = props

  const handleChange = (event) => {
    let value = ''
    if (event.target.value.length > 0) {
      value = event.target.value
    }

    setSerachName(value)
  }

  return (
    <div>
      find countries  <input value={searchName} onChange={handleChange} />
    </div>
  )
}

export { Search }
