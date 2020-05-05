import React from "react";
import ReactDOM from "react-dom";

import "./styles/timeline.css";
import AppTimeline from "./components/AppTimeline";

ReactDOM.hydrate(<AppTimeline/>, document.getElementById("mountNode"));
