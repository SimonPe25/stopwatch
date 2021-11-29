import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { interval, Observable } from "rxjs";
import { takeUntil } from "rxjs/operators";

const StopWatch = () => {
  const [stop, setStop] = useState(true);
  const [haur, setHaur] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const observble = new Observable();

    if (status === true) {
      if (min > 59) {
        setHaur(haur + 1);
        setMin(0);
      }
      if (second > 59) {
        setMin(min + 1);
        setSecond(0);
      }
      if (milisecond > 30) {
        console.log("Очистил");
        // setSecond(second + 1);
        // setMilisecond(0);
        // clearInterval(val);
        // console.log("VAL", val);
      }
      if (milisecond <= 30) {
        console.log("status 1");
        interval(500)
          .pipe(takeUntil(observble))
          .subscribe((val) => {
            setMilisecond((val = val + 1));
          });
      }

      //setSecondTest((val = val + 1));
    }
  });

  return (
    <div>
      <h2>{haur}</h2>
      <h2>{min}</h2>
      <h1>{second}</h1>
      <h2>{milisecond}</h2>

      <button onClick={() => setStatus(true)}>Изменить статус</button>
    </div>
  );
};

export default StopWatch;
