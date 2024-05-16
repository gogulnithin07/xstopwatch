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
  return (
    <div>
      <h1>Stopwatch</h1>
      {second === 0 ? (
        <p>Time:0:00</p>
      ) : (
        <p>
          Time:
          {Math.floor(second / 60) < 9
            ? "0" + Math.floor(second / 60)
            : Math.floor(second / 60) || "00"}
          :{second % 60 < 9 ? "0" + (second % 60) : second % 60 || "00"}
        </p>
      )}
      <button onClick={(e) => handleClick(e)}>{stop ? "Stop" : "Start"}</button>
      <button onClick={(e) => handleReset(e)}>Reset</button>
    </div>
  );
}
export default App;
