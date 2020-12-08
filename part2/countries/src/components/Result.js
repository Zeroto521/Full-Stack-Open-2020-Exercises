

const Result = (props) => {
  const { countries } = props

  console.log(countries)

  return (
    <div>
      {
        countries.length <= 0 &&
        <p>Too many matches, specify another filter</p>
      }
      {
        countries.length === 1 &&
        <p>{countries}</p>
      }
      {
        countries.length > 0 && countries.length < 10 &&
        <p>{countries}</p>
      }
      {
        countries.length > 10 &&
        <p>Too many matches, specify another filter</p>
      }
    </div>
  )
}

export { Result }
