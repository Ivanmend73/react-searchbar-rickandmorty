import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Axios from "axios";

Axios.defaults.baseURL='https://nodejs-searchbar-rickandmorty.herokuapp.com'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);