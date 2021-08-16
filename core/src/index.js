import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Power } from "./components/power";
import { Aerodynamics } from "./components/aerodynamics";
import { Dash } from "./components/dash";
import { Buttons } from "./components/buttons";
import { Footer } from "./components/footer";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Power />
		<Aerodynamics />
		<Dash />
		<Buttons />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
