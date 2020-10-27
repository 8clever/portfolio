import React from "react";
import { Entry } from "./Entry";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

const root = document.createElement("div");

ReactDOM.render(
    <BrowserRouter>
        <Entry />
    </BrowserRouter>,
    root
);

document.body.appendChild(root);

if (module.hot) {
    module.hot.accept();
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
