import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPerson from './components/ListPerson'
import SuccessNotification from './components/SuccessNotification'
import actions from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [wordFiltered, setWordFiltered] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    getAllPersons()
  }, [])

  const getAllPersons = async () => {
    try {
      setPersons(await actions.getAll())
    } catch (error) {
      console.error("There's an error when you try to get persons' list.");
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
    let personRepeated = persons.find((person) => person.name === newName)
    if (!isEmpty) {
      alert('Fields are empty!')
    } else if (personRepeated) {
      if (window.confirm(`${personRepeated.name} is already added to phonebook, the old number with a new one?`)) {
        const modifiedPerson = {
          ...personRepeated, number: newNumber
        }
        try {
          const newPerson = await actions.update(personRepeated.id, modifiedPerson)
          setPersons(persons.map(person => person.id !== personRepeated.id ? person : newPerson))
          setNewName('')
          setNewNumber('')
          setSuccessMessage(`The ${personRepeated.name}'s number was updated.`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        } catch (error) {
          console.error("There's an error when you try to delete a person.");
        }
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      try {
        setPersons(persons.concat(await actions.create(newPerson)))
        setNewName('')
        setNewNumber('')
        setSuccessMessage('The new contact was added.')
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      } catch (error) {
        console.error("There's an error when you try to add a new person.");
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
        console.error("There's an error when you try to delete a person.");
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={successMessage} />
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
