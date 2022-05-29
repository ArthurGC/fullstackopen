import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleName = (event) => setNewName(event.target.value)
  const AddPerson = (event) => {
    event.preventDefault();
    let isRepeated = persons.find((person) => person.name === newName)
    if (isRepeated) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) =>{
        return <p key={nanoid()}>{person.name}</p>
      })}
    </div>
  )
}

export default App
