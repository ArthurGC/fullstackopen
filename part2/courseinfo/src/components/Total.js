import React from 'react'

const Total = ({parts}) => {
    let sum = parts.reduce((previousEx, currentEx) => previousEx + currentEx.exercises, 0)
    return (
        <b>Total of exercises {sum}</b>
    )
}

export default Total
