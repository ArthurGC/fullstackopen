import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({name,value}) => <p>{name} <span>{value}</span></p>

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

  const total = () => good + neutral + bad

  const average = () => {
    let result = (good - bad)/total()
    return result || 0
  }

  const positive = () => {
    let result = good/total() * 100
    return result ? `${result} %` : '0 %'
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <h2>Statistics</h2>
      <Statistics name='Good' value={good}/>
      <Statistics name='Neutral' value={neutral}/>
      <Statistics name='Bad' value={bad}/>
      <Statistics name='All' value={total()}/>
      <Statistics name='Average' value={average()}/>
      <Statistics name='Positive' value={positive()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
