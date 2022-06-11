import React from 'react'

const Search = ({ value, handleOnChange }) => {
    return (
        <div>
            <label>Find Countries:</label>
            <input onChange={handleOnChange} value={value} />
        </div>
    )
}

export default Search
