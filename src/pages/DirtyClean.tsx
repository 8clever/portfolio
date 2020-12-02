import { Button } from "reactstrap";
import bg from "../images/back2-min.jpg";
import mobile from "../images/mobile-dirtyclean.png";

const Buttons = (props: {
  block?: boolean;
}) => {
  return (
    <>
      <a 
        style={{
          marginRight: "1.5vh"
        }}
        href="https://apps.apple.com/ru/app/dirty-clean/id1541008540">
        <Button 
          block={props.block}
          size="lg"
          color="info">
          <i className="fab fa-apple mr-2" />
          iOS
        </Button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.VIPSoftware.DirtyClean&hl=ru&gl=US">
        <Button 
          block={props.block}
          size="lg"
          color="info">
          <i className="fab fa-android mr-2" />
          Android
        </Button>
      </a>
    </>
  )
}

export const DirtyClean = () => {
  return (
    <div style={{
      background: `url("${bg}") content-box center / cover no-repeat`,
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      placeContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: `url("${mobile}") content-box center / cover no-repeat`,
        height: "90vh",
        width: "45vh",
        display: "flex",
        flexDirection: "column-reverse",
      }}>
        <div style={{
          margin: "2.4vh",
          borderRadius: "0 0 2rem 2rem",
          padding: "1rem",
          background: "rgba(0,0,0,0.5)",
        }}>
          <div style={{ 
            marginBottom: "2rem",
            textAlign: "center", 
            color: "white" 
          }}>
            <h1>Download Now</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  )
}