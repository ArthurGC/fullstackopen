import React from 'react'

const Total = props => {
    let sum = props.parts.reduce((previousEx, currentEx) => previousEx + currentEx.exercises, 0)
    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total
