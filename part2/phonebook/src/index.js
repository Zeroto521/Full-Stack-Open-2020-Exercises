import ReactDOM from 'react-dom'

import App from './App'

const persons = [{ 'name': 'Arto Hellas', 'number': '040-1234567' }]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)