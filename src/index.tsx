import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />}></Route>
			<Route path="/dashboard" element={<App />}></Route>
		</Routes>
	</BrowserRouter>
	// </React.StrictMode>
);
