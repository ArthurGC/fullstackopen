import React from 'react'
import PropTypes from 'prop-types'
import Part from './Part';

const Content = props => {
    return (
        <div>
            <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} />
        </div>
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
