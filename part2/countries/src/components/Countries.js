import React from 'react'
import { nanoid } from 'nanoid'

const Countries = ({ countries, handleClick }) => {
    return (
        <div>
            {
                countries.map(country => {
                    return (
                        <div key={nanoid()}>
                            <p>{country.name.common}</p>
                            <button onClick={() => handleClick(country.name.official)}>Show</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Countries
