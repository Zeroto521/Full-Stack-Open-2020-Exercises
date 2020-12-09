import { useState, useEffect } from 'react'
import axios from 'axios'

import { Button } from './Button'

const Country = (props) => {
  const { country, countryShow, setShow } = props
  const [weatherIcon, setWeatherIcon] = useState('')
  const [temperature, setTemperature] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [windDirection, setWindDirection] = useState('')


  const api_key = process.env.REACT_APP_API_KEY
  const weather_api = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`

  useEffect(() => {
    axios.get(weather_api).then(response => {
      setWeatherIcon(response.data['current']['weather_icons'][0])
      setTemperature(response.data['current']['temperature'])
      setWindSpeed(response.data['current']['wind_speed'])
      setWindDirection(response.data['current']['wind_dir'])
    })
  }, [weather_api])

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
        <div>
          <h3>Weather in {country.capital}</h3>
          <div>
            <div>
              <h4>temperature</h4>
              <div>
                {temperature} Celcius
              </div>
              <img src={weatherIcon} alt="Weather Icon" width="5%" />
            </div>
            <div>
              <h4>wind</h4>
              <div>Speed: {windSpeed} mph</div>
              <div>Direction: {windDirection}</div>
            </div>
          </div>
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
