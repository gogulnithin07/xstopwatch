import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}
function Timer() {
  const [second, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  function handleClick(e) {
    setIsRunning((c) => !c);
  }
  function handleReset(e) {
    setSeconds(0);
    setIsRunning(false);
  }

  useEffect(
    function () {
      let timerId;
      if (isRunning) {
        timerId = setInterval(function () {
          setSeconds((second) => second + 1);
        }, 1000);
      }
      return () => {
        clearInterval(timerId);
      };
    },
    [second, isRunning]
  );

  function formatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const remaningSecs = Math.floor(secs % 60);
    return `${minutes}:${remaningSecs < 10 ? "0" : ""}${remaningSecs}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(second)}</p>
      <div className="buttons">
        <button onClick={handleClick}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
export default App;
