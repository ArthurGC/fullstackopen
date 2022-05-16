import React from 'react'
import PropTypes from 'prop-types'
import Part from './Part';

const Content = props => {
    return (
        <div>
            <Part part={props.part1.name} exercises={props.part1.exercises} />
            <Part part={props.part2.name} exercises={props.part2.exercises} />
            <Part part={props.part3.name} exercises={props.part3.exercises} />
        </div>
    )
}

Content.propTypes = {
    props: PropTypes.shape({
        part1: PropTypes.shape({
            name: PropTypes.string,
            exercises: PropTypes.number
        }),
        part2: PropTypes.shape({
            name: PropTypes.string,
            exercises: PropTypes.number
        }),
        part3: PropTypes.shape({
            name: PropTypes.string,
            exercises: PropTypes.number
        })

    })
}

export default Content
