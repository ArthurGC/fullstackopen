import React from 'react'
import PropTypes from 'prop-types'

const Total = props => {
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}

Total.propTypes = {
    props: PropTypes.shape({
        exercises1: PropTypes.number,
        exercises2: PropTypes.number,
        exercises3: PropTypes.number,
    })
}

export default Total
