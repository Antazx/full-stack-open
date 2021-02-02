import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const History = (props) => {
  return (props.allClicks.length === 0) ? 
    (
      <div>
        the app is used by pressing the buttons
      </div>
    ) :
    (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
    )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

let counter = 0;

ReactDOM.render(
  <App counter={counter} />, 
  document.getElementById('root')
)