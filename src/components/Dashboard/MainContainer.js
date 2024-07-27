import React from "react";
import "./MainContainer.css";
import "./Container.css";
import LottieAnimation from "./LottieAnimation.js";
import MainRightBottomCard from "./MainRightBottomCard";

function MainContainer() {
  return (
    <div className="container">
      <div className="maincontainer">
        <div className="left">
          <div
            className="banner new"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 121, 52, 0.35) -1.39%, rgba(255, 255, 255, 0.0735) 95.65%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="textContainert">
              <div className="animationContainer">
                <LottieAnimation />
              </div>
              <div className="waviy">
                <span style={{ "--i": 1 }}>c</span>
                <span style={{ "--i": 2 }}>o</span>
                <span style={{ "--i": 3 }}>m</span>
                <span style={{ "--i": 4 }}>i</span>
                <span style={{ "--i": 5 }}>n</span>
                <span style={{ "--i": 6 }}>g</span>
                <span className="space" style={{ "--i": 7 }}>
                  &nbsp;
                </span>
                <span style={{ "--i": 8 }}>s</span>
                <span style={{ "--i": 9 }}>o</span>
                <span style={{ "--i": 10 }}>o</span>
                <span style={{ "--i": 11 }}>n</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="right">
          <MainRightBottomCard />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
