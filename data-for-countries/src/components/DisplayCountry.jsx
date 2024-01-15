import {useEffect, useState} from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather.jsx'

const DisplayCountry = ({country}) => {
    const [weather, setWeather] = useState(null)

    const langs = Object.keys(country.languages)
    const apiKey = import.meta.env.VITE_SOME_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`


    useEffect(() => {
        const request = axios.get(apiUrl)
        request.then(response => console.log(response.data))
        request.then(response => setWeather(response.data))
    }, [apiUrl])

    return (
        <>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {langs.map(lang => <li key={lang}>{country.languages[lang]}</li>)}
            </ul>
            <div className='flag'>{country.flag}</div>
            {weather
                ? <DisplayWeather weather={weather} city={country.capital}/>
                : null
            }
        </>
    )
}

export default DisplayCountry