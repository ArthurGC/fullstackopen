import React from 'react'
import Part from './Part';

const Content = props => {
    return (
        <div>
            {props.parts.map((part, i) => {
                return <Part part={part.name} exercises={part.exercises} key={i} />
            })}
        </div>
    )
}

export default Content
