import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPerson from './components/ListPerson'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [wordFiltered, setWordFiltered] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }, [])

  const personsToShow = wordFiltered.trim()
    ? persons.filter((person) => person.name.toLowerCase().includes(wordFiltered.toLowerCase()))
    : persons

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setWordFiltered(event.target.value)

  const AddPerson = (event) => {
    event.preventDefault();
    let isEmpty = newName.trim() && newNumber.trim()
    let isRepeated = persons.find((person) => person.name === newName)
    if (!isEmpty) {
      alert('Fields are empty!')
    } else if (isRepeated) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={wordFiltered} handleChange={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        handleName={handleName}
        handleNumber={handleNumber}
        handleSubmit={AddPerson}
      />
      <h2>Numbers</h2>
      <ListPerson persons={personsToShow} />
    </div>
  )
}

export default App
