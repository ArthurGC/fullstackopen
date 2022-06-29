import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPerson from './components/ListPerson'
import actions from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [wordFiltered, setWordFiltered] = useState('')

  useEffect(() => {
    getAllPersons()
  }, [])

  const getAllPersons = async () => {
    try {
      setPersons(await actions.getAll())
    } catch (error) {
      console.log("There's an error when you try to get persons' list.");
    }
  }

  const personsToShow = wordFiltered.trim()
    ? persons.filter((person) => person.name.toLowerCase().includes(wordFiltered.toLowerCase()))
    : persons

  const handleName = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setWordFiltered(event.target.value)

  const AddPerson = async (event) => {
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
      try {
        setPersons(persons.concat(await actions.create(newPerson)))
        setNewName('')
        setNewNumber('')
      } catch (error) {
        console.log("There's an error when you try to add a new person.");
      }
    }
  }

  const removePerson = async (id) => {
    let personSelected = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personSelected.name} ?`)) {
      try {
        await actions.remove(id)
        setPersons(persons.filter(person => person.id !== id))
      } catch (error) {
        console.log("There's an error when you try to delete a person.");
      }
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
      <ListPerson persons={personsToShow} handleDelete={removePerson} />
    </div>
  )
}

export default App
