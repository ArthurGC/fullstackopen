import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({name,value}) => <p>{name} <span>{value}</span></p>
const Button = ({name,handleClick}) => <button onClick={handleClick}>{name}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  let total =  good + neutral + bad

  let average = (good - bad)/total || 0

  let positiveGood = total ? good/total * 100 : 0

  let positive = `${positiveGood} %`

  return (
    <div>
      <h1>Give feedback</h1>
        <Button handleClick={handleGood} name='Good'/>
        <Button handleClick={handleNeutral} name='Neutral'/>
        <Button handleClick={handleBad} name='Bad'/>
      <h2>Statistics</h2>
      { total === 0 ? 
        <p>No feedback given</p> :
        <>
          <Statistic name='Good' value={good}/>
          <Statistic name='Neutral' value={neutral}/>
          <Statistic name='Bad' value={bad}/>
          <Statistic name='All' value={total}/>
          <Statistic name='Average' value={average}/>
          <Statistic name='Positive' value={positive}/>
        </>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
