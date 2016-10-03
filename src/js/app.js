import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/main.scss";

import Layout from "./components/Layout";

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
