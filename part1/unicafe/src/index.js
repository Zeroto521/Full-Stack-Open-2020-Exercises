import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Title } from './components/Title'
import { Counter } from './components/Counter'
import { Button } from './components/Button'


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

      <Title name={'statistics'} />
      <Counter name={'good'} number={good} />
      <Counter name={'neutral'} number={neutral} />
      <Counter name={'bad'} number={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)