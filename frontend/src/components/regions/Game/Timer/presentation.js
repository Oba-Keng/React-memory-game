import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds => seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes => minutes - 1);

          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  if (minutes > 1) {
  }

  return (
    <React.Fragment>
      <button className="timer">Start Game</button>

      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1> Times Up!</h1>
        ) : (
          <h1 className="timer-text">
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
      <h3 class="text">
        Warning: not to be<br></br> used by person's who <br></br> are
        photosensetive!
      </h3>
    </React.Fragment>
  );
};

export default Timer;
