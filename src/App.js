import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}
function Timer() {
  const [second, setSeconds] = useState(0);
  const [stop, setStop] = useState(false);
  const [intervalFun, setIntervalFun] = useState(null);
  function handleClick(e) {
    if (stop) {
      setIntervalFun((intervalId) => {
        clearInterval(intervalId);
      });
      setStop((c) => !c);
    } else {
      setIntervalFun(
        setInterval(function () {
          setSeconds((second) => second + 1);
        }, 1000)
      );
      setStop((c) => !c);
    }
  }
  function handleReset(e) {
    setSeconds((c) => 0);
    setIntervalFun((intervalId) => {
      clearInterval(intervalId);
    });
  }

  function FormatTime(secs) {
    const minutes = Math.floor(secs / 60);
    const second = Math.floor(secs % 60);
    return `${minutes}:${second < 9 ? "0" + second : second}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>

      <p>
        Time:
        {FormatTime(second)}
      </p>
      <div className="buttons">
        <button onClick={handleClick}>{stop ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
export default App;
