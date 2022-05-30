import React from 'react'

const PersonForm = ({ name, number, handleName, handleNumber, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input value={name} onChange={handleName} />
            </div>
            <div>
                Number: <input type="number" value={number} onChange={handleNumber} />
            </div>
            <div>
                <button type="submit">Add contact</button>
            </div>
        </form>
    )
}

export default PersonForm
