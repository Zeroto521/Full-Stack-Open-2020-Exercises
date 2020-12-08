import React, { useState } from 'react'

import { Result } from './components/Result'
import { Search } from './components/Search'

const App = () => {
  const [searchName, setSerachName] = useState('')
  const [countries, setCountries] = useState([])

  return (
    <div>
      <Search searchName={searchName} setSerachName={setSerachName} />
      <Result countries={countries} setCountries={setCountries} searchName={searchName} />
    </div>
  )
}

export default App
