import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

const App = ({anecdotes}) => {
  let initialArray = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialArray)

  const handleNewComment = () => {
    let random = Math.floor(Math.random() * (anecdotes.length))
    setSelected(random)
  }

  const handleVote = () => {
    let newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button name='Vote' handleClick={handleVote}/>
      <Button name='Next anecdote' handleClick={handleNewComment} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
