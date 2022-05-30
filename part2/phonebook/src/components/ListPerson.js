import React from 'react'
import { nanoid } from 'nanoid'
import Person from './Person'

const ListPerson = ({persons}) => {
    return (
        <div>
            {persons.map((person) => {
                return <Person key={nanoid()} name={person.name} number={person.number}/>
            })}
        </div>
    )
}

export default ListPerson
