import React from "react";

const Cards = props => {
  const FlashTopFront = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/robot.gif"
        alt=""
        className="front tile"
      />
    );
  };

  const FlashTopBack = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/flash-top.gif"
        alt=""
        className="back tile"
      />
    );
  };

  const BlueSmokeFront = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/robot.gif"
        alt=""
        className="front tile"
      />
    );
  };

  const BlueSmokeBack = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/bluesmoke.gif"
        alt=""
        className="back tile"
      />
    );
  };

  const GlobeFront = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/robot.gif"
        alt=""
        className="front tile"
      />
    );
  };

  const GlobeBack = () => {
    return (
      <img
        onClick={props.onClick}
        src="/images/globe.gif"
        alt=""
        className="back tile"
      />
    );
  };

  return (
    <React.Fragment>
      <div className={"flipper-container " + props.orientation}>
        <div className={"flipper" + (props.flipped ? " flipped" : "")}>
          <FlashTopFront></FlashTopFront>
          <FlashTopBack></FlashTopBack>
        </div>
      </div>
      <div className={"flipper-container " + props.orientation}>
        <div className={"flipper" + (props.flipped ? " flipped" : "")}>
          <BlueSmokeFront></BlueSmokeFront>
          <BlueSmokeBack></BlueSmokeBack>
        </div>
      </div>
      <div className={"flipper-container " + props.orientation}>
        <div className={"flipper" + (props.flipped ? " flipped" : "")}>
          <GlobeFront></GlobeFront>
          <GlobeBack></GlobeBack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
