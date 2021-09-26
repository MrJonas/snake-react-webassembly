/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useCallback, useState } from "react";
import "./App.css";
import { getSnakeAPI } from "./snakeAPI";
import {Canvas} from './canvas'


const DIRECTION_MAP = {
  ArrowUp: 1,
  w: 1,
  W: 1,
  ArrowDown: 2, 
  s: 2,
  S: 2,
  ArrowRight: 3,
  d: 3,
  D: 3,
  ArrowLeft: 4, 
  a: 4,
  A: 4,
}

function App() {
  const snakeAPI = useRef<any>();
  const messageTimeout = useRef<any>();
  const [snake, setSnake] = useState([])
  const [food, setFood] = useState([])
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const handleConsoleLog = (m:string) => {
    const message = snakeAPI.current?.exports.__getString(m)
    console.log(message)
    setMessage(message)
    setShowMessage(true)
    clearTimeout(messageTimeout.current)
    messageTimeout.current = setTimeout(() => {
      setShowMessage(false)
    }, 1000)
  }
  const load = async () => {
    snakeAPI.current = await getSnakeAPI(handleConsoleLog);
  };
  const update = () => {
    if (snakeAPI.current) {
      const { getPosition, __getArray } = snakeAPI.current?.exports;
      const data = __getArray(getPosition());
      const snakeData = __getArray(data[0]);
      const foodData = __getArray(data[1]);
      setSnake(snakeData)
      setFood(foodData)
    }
  };
  useEffect(() => {
    load();
    const interval = setInterval(() => update(), 120);
    return () => clearInterval(interval)
  }, []);

  const handleUserKeyPress = useCallback((event) => {
    const key = event.key as string;
    // @ts-ignore
    const direction: number | undefined = DIRECTION_MAP[key]
    if (direction) {
      snakeAPI.current?.exports.setDirection(direction)
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const numberOfApples = ((snake.length || 4) / 2) - 2

  const messageStyle = {
    opacity: showMessage ? 1 : 0,
    transition: showMessage ? '' : "all 1s ease-in"
  }

  return (
    <div className="App">
      <header className="App-header">&#127822; {numberOfApples}</header>
      <Canvas food={food} snake={snake}/>
      <div style={messageStyle}>{message}</div>
    </div>
  );
}

export default App;
