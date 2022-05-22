import React from 'react'

const Anecdote = ({anecdote, votes}) => {
  return (
    <div>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
    </div>
  )
}

export default Anecdote
