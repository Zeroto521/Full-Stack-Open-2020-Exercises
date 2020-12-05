import ReactDOM from 'react-dom'

import App from './App'

const persons = [{ 'name': 'Arto Hellas' }]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)