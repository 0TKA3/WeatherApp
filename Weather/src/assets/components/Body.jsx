const Body = ({currentWeather}) => {

    function show() {
        console.log(currentWeather)
    }

        return (
            <>
            <div className="content">
                <h1>{currentWeather.city}</h1>
                <h1>{currentWeather.condition}</h1>
                <h1>Температура: {currentWeather.temp_c}°C</h1>
                <h1>Ощущается как {currentWeather.feelslike_c}°C</h1>
                <h1>Скорость ветра: {Math.round(currentWeather.wind_kph/3.6)} м/с</h1>
            </div>
            </>
        );


}
 
export default Body;