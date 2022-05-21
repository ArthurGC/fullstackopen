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

  let total =  good + neutral + bad

  let average = (good - bad)/total || 0

  let positiveGood = total ? good/total * 100 : 0

  let positive = `${positiveGood} %`

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <h2>Statistics</h2>
      { total === 0 ? 
        <p>No feedback given</p> :
        <>
          <Statistics name='Good' value={good}/>
          <Statistics name='Neutral' value={neutral}/>
          <Statistics name='Bad' value={bad}/>
          <Statistics name='All' value={total}/>
          <Statistics name='Average' value={average}/>
          <Statistics name='Positive' value={positive}/>
        </>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
