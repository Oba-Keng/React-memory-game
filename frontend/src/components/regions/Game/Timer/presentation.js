import React, { useState } from "react";

const Timer = props => {
  const [timer, setTimer] = useState({
    minutes: 2,
    seconds: 0
  });

  const componentDidMount = () => {
    let myInterval = setInterval(() => {
      if (timer.seconds > 0)
        setTimer(({ seconds }) => ({
          seconds: seconds - 1
        }));
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(myInterval);
        } else {
          setTimer(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  };

  const componentWillUnmount = () => {
    clearInterval(props.myInterval);
  };

  return (
    <React.Fragment>
      <button
        className="start-button"
        onClick={componentDidMount}
        onChange={componentWillUnmount}
      >
        Start Game
      </button>

      <div>
        {timer.minutes === 0 && timer.seconds === 0 ? (
          <h1> Times Up!</h1>
        ) : (
          <h1>
            Time Remaining:{" "}
            {(timer.minutes = 0 ? timer.seconds : timer.minutes)}:
            {timer.seconds < 59 ? `0${timer.seconds}` : timer.seconds}
          </h1>
        )}
      </div>
    </React.Fragment>
  );
};

export default Timer;
