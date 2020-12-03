import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Button } from './components/Button'
import { Statistics } from './components/Statistics'
import { Title } from './components/Title'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title name={'give feedback'} />
      <Button name={'good'} func={setGood} value={good} />
      <Button name={'neutral'} func={setNeutral} value={neutral} />
      <Button name={'bad'} func={setBad} value={bad} />

      <Statistics name={'statistics'} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)