import React from "react";
import "./App.css";
import {Canvas, AppleCounter, ActionMessage} from './components/'
import { useSnakeApiData} from './hooks'

function App() {
  const {snake, food, message} = useSnakeApiData()

  return (
    <div className="App">
      <AppleCounter snakeLength={snake.length} />
      <Canvas food={food} snake={snake}/>
      <ActionMessage message={message?.text} messageTimestamp={message?.timestamp}/>
    </div>
  );
}

export default App;
