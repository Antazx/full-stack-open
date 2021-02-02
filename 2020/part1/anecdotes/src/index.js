import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick})  => (<button onClick={handleClick}>{text}</button>);
const BestAnecdote = ({anecdotes, points}) => {
  const max = Math.max(...points);
  const index = points.indexOf(max);
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p> has: {max} votes</p>
    </div>
  );
}
const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [points, addPoint] = useState([...props.anecdotes].fill(0, 0, anecdotes.length));
  
  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    addPoint(copy);
  };
  
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]}</p>
      <br></br>
      <Button text="vote" handleClick={handleVote}/>
      <Button text="next anecdote" handleClick={handleNext}/>
      <BestAnecdote points={points} anecdotes={anecdotes}/>
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];



ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)