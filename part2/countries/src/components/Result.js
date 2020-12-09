import axios from 'axios'
import React, { useEffect } from 'react'

import { Country } from './Country'

const Result = (props) => {
  const { countries, setCountries, searchName } = props

  const url = `https://restcountries.eu/rest/v2/name/${searchName}`

  useEffect(() => {
    if (searchName) {
      axios.get(url).then(response => {
        setCountries(response.data)
      })
    }
  })

  if (searchName) {
    return (
      <div>
        {
          (countries.length === 1) &&
          <Country country={countries[0]} />
        }
        {
          countries.length >= 2 && countries.length <= 10 &&
          <div>{countries.map(e => <div key={e.name}>{e.name}</div>)}</div>
        }
        {
          countries.length > 10 &&
          <div>Too many matches, specify another filter</div>
        }
      </div>
    )
  }

  return (
    <div></div>
  )
}

export { Result }
