import React from "react";
import './App.css';
import StopWatch from "./StopWatch/StopWatch.jsx";



function App() {

  //const [haur, setHaur] = useState(0);
 // const [min, setMin] = useState(0);
  //const [second, setSecond] = useState(0);
  //const [milisecond, setMilisecond] = useState(0);
 // const [stop, setStop] = useState(true);




  // const onStart = () => {
  //   setStop(false);
  // };
  // const onStop = () => {
  //   setStop(true);
  // };
  // const onReset = () => {
  //   setMin(0);
  //   setSecond(0);
  //   setMilisecond(0);
  // };

  // useEffect(() => {
  //   let interval = null;
  //   if (!stop) {
  //     interval = setInterval(() => {
  //       console.log("start");
  //       if (min > 59) {
  //         setHaur(haur + 1);
  //         setMin(0);
  //         clearInterval(interval);
  //       }
  //       if (second > 59) {
  //         setMin(min + 1);
  //         setSecond(0);
  //         clearInterval(interval);
  //       }
  //       if (milisecond > 999) {
  //         setSecond(second + 1);
  //         setMilisecond(0);
  //         clearInterval(interval);
  //       }
  //       if (milisecond <= 999) {
  //         setMilisecond(milisecond + 1);
  //       }
  //     }, 0.1);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });


  return (
    <div className="App">
      {/* <header className="App-header">  
        <p>
        {haur} - {min} - {second} - {milisecond}
        </p>
        <div>
        <button  className="btn" onClick={onStart}>Start</button>
        <button  className="btn" onClick={onStop}>Stop</button>
        <button  className="btn" onClick={onReset}>Reset</button>
        </div>
      </header> */}
      <div>the next</div>
      <StopWatch>test</StopWatch>
    </div>
  );
}

export default App;
