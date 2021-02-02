import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => (<h1>{text}</h1>);
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>);
const Statistic = ({text, counter}) => (
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>
)
const Statistics = ({good, neutral, bad}) => {

  const getTotal = () => (good + neutral + bad); 
  const getAverage = () => getTotal() !== 0 ? (good - bad) / getTotal() : 0;
  const getPositives = () => good !== 0 ? good / getTotal() : 0;

  return (good === 0 && neutral === 0 && bad === 0) ? (<div> No feedback given</div>) :
   (
    <table>
      <tbody>
      <Statistic text="good" counter={good}/>
      <Statistic text="neutral" counter={neutral}/>
      <Statistic text="bad" counter={bad}/>
      <Statistic text="all" counter={good + neutral + bad}/>
      <Statistic text="average" counter={getAverage()}/>
      <Statistic text="positive" counter={getPositives()}/>
      </tbody>
    </table>
  )
}
const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);

  return (
    <div>
      <Title text="Give feedback" />
      <Button text="good" handleClick={clickGood}/>
      <Button text="neutral" handleClick={clickNeutral}/>
      <Button text="bad" handleClick={clickBad}/>

      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)