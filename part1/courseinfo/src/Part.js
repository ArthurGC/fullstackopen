import React from 'react'
import PropTypes from 'prop-types'

const Part = props => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

Part.propTypes = {
    props: PropTypes.shape({
        part: PropTypes.string,
        exercises: PropTypes.number,
    })
}

export default Part
