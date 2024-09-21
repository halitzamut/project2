

import React from "react";
import ReactDm from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDm.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter basename="/project2">

        <App />

    </BrowserRouter>

);