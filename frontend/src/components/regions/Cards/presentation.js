import React from "react";

const Cards = props => {
  const RobotFront = () => {
    return <img src="/images/robot.gif" alt="" className="front tile" />;
  };

  const FlashTop = () => {
    return <img src="/images/flash-top.gif" alt="" className="back tile" />;
  };

  const BlueSmoke = () => {
    return <img src="/images/bluesmoke.gif" alt="" className="back tile" />;
  };

  const Globe = () => {
    return <img src="/images/globe.gif" alt="" className="back tile" />;
  };

  const ToothPaste = () => {
    return <img src="/images/toothpaste.gif" alt="" className="back tile" />;
  };

  const HoneyComb = () => {
    return <img src="/images/honeycomb.gif" alt="" className="back tile" />;
  };

  const DiscoBall = () => {
    return <img src="/images/discoball.gif" alt="" className="back tile" />;
  };

  const SlicedTriangle = () => {
    return (
      <img src="/images/slicedtriangle.gif" alt="" className="back tile" />
    );
  };

  const Spiral = () => {
    return <img src="/images/spiral.gif" alt="" className="back tile" />;
  };

  const MilkWay = () => {
    return <img src="/images/milkywayfog.gif" alt="" className="back tile" />;
  };

  const Ampisand = () => {
    return <img src="/images/ampisand.gif" alt="" className="back tile" />;
  };

  const Radius = () => {
    return <img src="/images/radius.gif" alt="" className="back tile" />;
  };

  const RainbowEgg = () => {
    return <img src="/images/rainbowegg.gif" alt="" className="back tile" />;
  };

  const Rotary = () => {
    return <img src="/images/rotary.gif" alt="" className="back tile" />;
  };

  const Smiley = () => {
    return <img src="/images/smiley.gif" alt="" className="back tile" />;
  };

  const TulipNinja = () => {
    return <img src="/images/tulipninja.gif" alt="" className="back tile" />;
  };

  return (
    <React.Fragment>
      <div className="border-row">
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <FlashTop></FlashTop>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <TulipNinja></TulipNinja>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <BlueSmoke></BlueSmoke>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Globe></Globe>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <ToothPaste></ToothPaste>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <HoneyComb></HoneyComb>
          </div>
        </div>
      </div>
      <div className="border-row">
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <DiscoBall></DiscoBall>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <ToothPaste></ToothPaste>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Rotary></Rotary>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Spiral></Spiral>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <MilkWay></MilkWay>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Ampisand></Ampisand>
          </div>
        </div>
      </div>
      <div className="border-row">
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Spiral></Spiral>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <RainbowEgg></RainbowEgg>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <SlicedTriangle></SlicedTriangle>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <HoneyComb></HoneyComb>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <MilkWay></MilkWay>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Smiley></Smiley>
          </div>
        </div>
      </div>
      <div className="border-row">
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <DiscoBall></DiscoBall>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <SlicedTriangle></SlicedTriangle>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <FlashTop></FlashTop>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Globe></Globe>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Radius></Radius>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Ampisand></Ampisand>
          </div>
        </div>
      </div>
      <div className="border-row">
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <TulipNinja></TulipNinja>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Smiley></Smiley>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Rotary></Rotary>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <BlueSmoke></BlueSmoke>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <RainbowEgg></RainbowEgg>
          </div>
        </div>
        <div className={"flipper-container " + props.orientation}>
          <div className={"flipper" + (props.flipped ? " flipped" : "")}>
            <RobotFront></RobotFront>
            <Radius></Radius>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cards;
