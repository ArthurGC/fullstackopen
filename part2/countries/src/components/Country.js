import React from 'react'
import { nanoid } from 'nanoid'

const Country = ({country}) => {
    let languages = country.languages ? country.languages : []
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
        </div>
    )
}

export default Country
