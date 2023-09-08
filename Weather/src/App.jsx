import { useState } from 'react'
import CityInput from './assets/components/CityInput'
import './assets/components/style.scss'
import Body from './assets/components/Body'

function App() {

  let [currentWeather, setCurrentWeather] = useState({})
  
  return (
    <>
    <div className="container">
      <div className="app-body">
        <CityInput currentWeather={currentWeather} setCurrentWeather={setCurrentWeather}></CityInput>
        <Body currentWeather={currentWeather} ></Body>
      </div>
    </div>
    </>
  )
}

export default App