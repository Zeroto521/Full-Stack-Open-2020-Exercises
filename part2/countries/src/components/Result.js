import { Country } from './Country'

const Result = (props) => {
  const { countries, searchName, countryShow, setShow } = props

  if (searchName) {
    if (countries.length === 1) {
      return (
        <div>
          <Country country={countries[0]} countryShow={countryShow} setShow={setShow} />
        </div>
      )
    } else if (countries.length >= 2 && countries.length <= 10) {
      return (
        <div>
          {
            countries.map(e => {
              return (
                <div key={e.name}>
                  <Country country={e} countryShow={countryShow} setShow={setShow} />
                </div>
              )
            })
          }
        </div>
      )
    } else if (countries.length > 10) {
      return (
        <div> Too many matches, specify another filter</div>
      )
    }
  }

  return (<div></div>)
}

export { Result }
