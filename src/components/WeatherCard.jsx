import React from 'react'
import { Link } from 'react-router-dom'

import '../style/WeatherCard.css'
import Weather_Icons from '../images/WeatherIcons.js'

function WeatherCard({ Image, Temp, City, Country, Description, Wind_Speed, Humidity }) {

  return (
    <div className="WeatherCardDiv">
      <div className='WeatherCard'>
        <div className="Top">
          <div className='Icon_Temp'>
            <img src={Weather_Icons[Image]} alt="Icon" />
            <h1>🌡️ {Temp} ℃</h1>
          </div>
          <h2>🏠 {City},{Country}</h2>
        </div>
        <div className="Bottom">
          <div className='Left'>
            <h2>🌤️ {Description}</h2>
            <button className='BackButton'><Link to="/">New Search</Link></button>
          </div>
          <div>
            <h2>💨 {Wind_Speed} m/sec</h2>
            <h2>💦 {Humidity} %</h2>
          </div>
        </div>


      </div>
    </div>
  )
}

export default WeatherCard