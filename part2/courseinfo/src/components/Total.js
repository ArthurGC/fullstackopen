import React from 'react'

const Total = ({parts}) => {
    let sumExercises = parts.reduce((previousEx, currentEx) => previousEx + currentEx.exercises, 0)
    return (
        <b>Total of {sumExercises} exercises</b>
    )
}

export default Total
