const DisplayWeather = ({weather, city}) => {
    const imgUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
        <div>
            <h2>Weather in {city}</h2>
            <div>weather {(weather.main.temp - 273).toFixed(2)} Celcius</div>
            <img src={imgUrl} alt={weather.weather[0].description}/>
            <div>Wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default DisplayWeather