// import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Timer />
//     </div>
//   );
// }
// function Timer() {
//   const [second, setSeconds] = useState(0);
//   const [stop, setStop] = useState(false);
//   const [intervalFun, setIntervalFun] = useState(null);
//   function handleClick(e) {
//     if (stop) {
//       setIntervalFun((intervalId) => {
//         clearInterval(intervalId);
//       });
//       setStop((c) => !c);
//     } else {
//       setIntervalFun(
//         setInterval(function () {
//           setSeconds((second) => second + 1);
//         }, 1000)
//       );
//       setStop((c) => !c);
//     }
//   }
//   function handleReset(e) {
//     setSeconds((c) => 0);
//     setIntervalFun((intervalId) => {
//       clearInterval(intervalId);
//     });
//   }

//   function FormatTime(secs) {
//     const minutes = Math.floor(secs / 60);
//     const remaningSecs = Math.floor(secs % 60);
//     return `${minutes}:${remaningSecs < 10 ? "0" : ""}${remaningSecs}}`;
//   }
//   return (
//     <div>
//       <h1>Stopwatch</h1>
//       <p>
//         Time:
//         {FormatTime(second)}
//       </p>
//       <div className="buttons">
//         <button onClick={handleClick}>{stop ? "Stop" : "Start"}</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default App;
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, timer]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  const startReset = () => {
    setIsRunning(!isRunning);
  };

  const resetHandler = () => {
    setTimer(0);
    setIsRunning(false);
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={startReset}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default App;
