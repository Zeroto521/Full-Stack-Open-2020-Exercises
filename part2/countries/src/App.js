import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Result } from './components/Result'
import { Search } from './components/Search'

const App = () => {
  const [searchName, setSerachName] = useState('')
  const [countries, setCountries] = useState([])

  const url = `https://restcountries.eu/rest/v2/${searchName}`


  // FIXME: React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
  if (searchName) {
    useEffect(() => {
      axios.get(url).then(response => {
        setCountries(response.data)
      })
    })
  }


  return (
    <div>
      <Search searchName={searchName} setSerachName={setSerachName} />
      <Result countries={countries} />
    </div>
  )
}

export default App
