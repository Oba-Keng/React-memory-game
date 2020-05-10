import React, { useState, useEffect } from "react";
import { FcHighPriority } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcExpired } from "react-icons/fc";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);
  const [active, setActive] = useState(false);

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

  return (
    <React.Fragment>
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1 className={"time-up-text"}>
            {" "}
            Times Up!! <FcExpired />
          </h1>
        ) : (
          <h1 className="timer-text">
            <FcAlarmClock /> Time Remaining {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
      <h1 class="warning-text">
        <FcHighPriority /> Warning: not to be<br></br> used by person's who{" "}
        <br></br> are photosensetive!..
      </h1>
    </React.Fragment>
  );
};

export default Timer;
