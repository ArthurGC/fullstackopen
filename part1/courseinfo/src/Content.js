import React from 'react'
import PropTypes from 'prop-types'

const Content = props => {
    return (
        <>
            <p>
                {props.part1} {props.exercises1}
            </p>
            <p>
                {props.part2} {props.exercises2}
            </p>
            <p>
                {props.part3} {props.exercises3}
            </p>
        </>
    )
}

Content.propTypes = {
    props: PropTypes.shape({
        part1: PropTypes.string,
        part2: PropTypes.string,
        part3: PropTypes.string,
        exercises1: PropTypes.number,
        exercises2: PropTypes.number,
        exercises3: PropTypes.number,
    })
}

export default Content
