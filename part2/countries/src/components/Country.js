import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'

const Country = ({ country }) => {
    let languages = country.languages ? country.languages : []
    let name = country.capital ? country.capital : country.name.common
    const api_key = process.env.REACT_APP_API_KEY
    const [temperature, setTemperature] = useState(null)

    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${encodeURIComponent(name)}`)
            .then(result => {
                setTemperature(result.data)
            })
    }, [api_key, name])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital ? country.capital[0] : "Not determined"}</p>
            <p>Population: {country.population ? country.population : "Not determined"}</p>
            <h3>Languages</h3>
            <ul>
                {Object.values(languages).map(language => {
                    return <li key={nanoid()}>{language}</li>
                })}
            </ul>
            <img src={country.flags.png} alt="Country's flag" />
            {temperature &&
                <div>
                    <h2>Weather in {temperature.location.name}</h2>
                    <p>Temperature: {temperature.current.temperature}</p>
                    <img src={temperature.current.weather_icons} alt="Temperature's icon" />
                    <p>Wind: {temperature.current.wind_speed} mph direcction {temperature.current.wind_dir}</p>
                </div>
            }
        </div>
    )
}

export default Country
