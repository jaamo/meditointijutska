import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Howl, Howler } from "howler";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

var sound = new Howl({
  src: ["sounds/398105__isolda__pour-merlin-le-lapin.wav"],
  autoplay: false,
  loop: true,
  volume: 1,
  onend: function () {
    console.log("Finished!");
  },
});

var bell = new Howl({
  src: ["sounds/127167__daphne-in-wonderland__tibetan-ball.wav"],
  autoplay: false,
  loop: false,
  volume: 1,
  onend: function () {
    console.log("Finished!");
  },
});

// sound.play();
// setInterval(() => {
//   bell.play();
// }, 6000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
