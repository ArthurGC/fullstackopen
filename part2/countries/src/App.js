import React, { useState } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'
import Search from './components/Search'

const App = () => {
  const [country, setCountry] = useState("")
  const [countries, setCountries] = useState([])

  const handleOnChange = (event) => {
    let value = event.target.value
    setCountry(value)
    value.trim() && getCountries(value)
  }

  const getCountries = (name) => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(result => {
        setCountries(result.data)
      })
  }

  const handleClick = (name) => {
    getCountries(name)
  }

  const contentLength = countries.length > 10
  const finderIsEmpty = country.trim()
  const showCountry = countries.length === 1

  return (
    <div>
      <Search handleOnChange={handleOnChange} value={country} />
      {contentLength && finderIsEmpty && <p>Too many matches, specify another filter.</p>}
      {!contentLength && finderIsEmpty && !showCountry
        && <Countries countries={countries} handleClick={handleClick} />
      }
      {showCountry && finderIsEmpty
        && <Country country={countries[0]} />}
    </div>
  )
}

export default App
