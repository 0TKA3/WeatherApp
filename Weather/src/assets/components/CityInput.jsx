import { useState } from "react";

const CityInput = ({currentWeather, setCurrentWeather}) => {
  
  let [city, setCity] = useState("");

  function cityHandler(event) {
    setCity(event.target.value);  
  }


  let json
  
  async function getWeather() {
    let url = `http://api.weatherapi.com/v1/current.json?key=a578bd7bcd474305a7c171413230709&q=${city}&aqi=no&lang=ru`;
    let response = await fetch(url);
    if (response.ok && city != "") {
      json = await response.json();

      setCurrentWeather({
        city:json.location.name,
        condition:json.current.condition.text,
        temp_c:json.current.temp_c,
        temp_f:json.current.temp_f,
        is_day:json.current.is_day,
        wind_kph:json.current.wind_kph,
        feelslike_c:json.current.feelslike_c,
        feelslike_f:json.current.feelslike_f,
      })

    } else {
      console.log("Ошибка HTTP: " + response.status);
    }
  }

  return (
    <>
      <input className="city-input" type="text" placeholder="Город" onBlur={() => getWeather()} onChange={(event) => cityHandler(event)} />
    </>
  );
};

export default CityInput;
