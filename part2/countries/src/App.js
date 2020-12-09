import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { Result } from './components/Result'
import { Search } from './components/Search'

const App = () => {
  const [searchName, setSerachName] = useState('')
  const [countries, setCountries] = useState([])
  const [countryShow, setShow] = useState({})

  const url = `https://restcountries.eu/rest/v2/name/${searchName}`

  useEffect(() => {
    axios.get(url).then(response => {
      setCountries(response.data)
    })
  }, [url])

  useEffect(() => {
    let changeShow = {}
    countries.forEach(e => changeShow[e.name] = false)
    setShow(changeShow)
  }, [countries])


  return (
    <div>
      <Search searchName={searchName} setSerachName={setSerachName} />
      <Result countries={countries} setCountries={setCountries}
        searchName={searchName} countryShow={countryShow} setShow={setShow} />
    </div>
  )
}

export default App
