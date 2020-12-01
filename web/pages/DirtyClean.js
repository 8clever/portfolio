import React from "react";
import { Button } from "reactstrap";
import bg from "../images/dirty-clean-bg.png";

export const DirtyClean = () => {
  return (
    <div style={{
      background: `url("${bg}") content-box center / cover no-repeat`,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      placeContent: "center"
    }}>
      <div style={{
        padding: "40px",
        background: "rgba(0,0,0,0.5)"
      }}>
        <div 
          className="mb-4"
          style={{ textAlign: "center", color: "white" }}>
          <h1>Download Now</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <a 
            className="mr-4"
            href="https://apps.apple.com/ru/app/dirty-clean/id1541008540">
            <Button 
              size="lg"
              color="info">
              <i className="fab fa-apple mr-2" />
              iOS
            </Button>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.VIPSoftware.DirtyClean&hl=ru&gl=US">
            <Button 
              size="lg"
              color="info">
              <i className="fab fa-android mr-2" />
              Android
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}