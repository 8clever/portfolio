import React from "react";
import { Entry } from "./Entry";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
    <BrowserRouter>
        <Entry />
    </BrowserRouter>, 
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
}
