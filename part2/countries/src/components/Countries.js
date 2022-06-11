import React from 'react'
import { nanoid } from 'nanoid'

const Countries = ({countries}) => {
    return (
        <div>
            {
                countries.map(country => {
                    return <p key={nanoid()}>{country.name.common}</p>
                })
            }
        </div>
    )
}

export default Countries
