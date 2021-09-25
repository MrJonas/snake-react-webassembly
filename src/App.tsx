import React, { useEffect } from "react";
import "./App.css";
import { getSnakeAPI } from "./snakeAPI";

function App() {
  const load = async () => {
    const snakeAPI = await getSnakeAPI();
    console.log(snakeAPI.exports.add(2, 3));
  };
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        Dummy
      </header>
    </div>
  );
}

export default App;
