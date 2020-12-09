import { Button } from './Button'

const Country = (props) => {
  const { country, countryShow, setShow } = props

  if (countryShow[country.name]) {
    return (
      <div>
        <h2>{country.name}</h2>
        <div>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
        </div>
        <div>
          <h3>languages</h3>
          {
            country.languages.map(e => <li key={e.name}>{e.name}</li>)
          }
        </div>
        <br />
        <div>
          <img src={country.flag} alt="Country Flag" width="8%" />
        </div>
      </div>
    )
  }

  return (
    <div>
      { country.name}
      < Button countryShow={countryShow} setShow={setShow} name={country.name} />
    </div>
  )
}

export { Country }
