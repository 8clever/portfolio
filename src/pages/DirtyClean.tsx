import { Button, Row, Col } from "reactstrap";
import bg from "../images/back2-min.jpg";
import React from "react";
import mobile from "../images/mobile-dirtyclean.png";

const Buttons = (props: {
  block?: boolean;
}) => {
  return (
    <>
      <Button 
        className="mr-2 mb-2"
        href="https://apps.apple.com/ru/app/dirty-clean/id1541008540"
        block={props.block}
        size="lg"
        color="info">
        <i className="fab fa-apple mr-2" />
        iOS
      </Button>
      <Button 
        className="mr-2 mb-2"
        href="https://play.google.com/store/apps/details?id=com.VIPSoftware.DirtyClean&hl=ru&gl=US"
        block={props.block}
        size="lg"
        color="info">
        <i className="fab fa-android mr-2" />
        Android
      </Button>
    </>
  )
}

export const DirtyClean = () => {

  React.useEffect(() => {
    document.title = "Dirty Clean";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = `
      {
        "@context" : "http://schema.org",
        "@type" : "SoftwareApplication",
        "name" : "Dirty Clean",
        "image" : "https://puzzle.simple-games.fun/static/media/mobile-dirtyclean.22d1a046.png",
        "author" : {
          "@type" : "Person",
          "name" : "Ivan Vityaev"
        },
        "publisher" : {
          "@type" : "Organization",
          "name" : "VIP Software"
        },
        "applicationCategory" : "puzzle",
        "downloadUrl" : [ "https://apps.apple.com/ru/app/dirty-clean/id1541008540", "https://play.google.com/store/apps/details?id=com.VIPSoftware.DirtyClean&hl=ru&gl=US" ],
        "operatingSystem" : "iOS, Android",
        "aggregateRating" : {
          "@type" : "AggregateRating",
          "ratingValue" : "5",
          "ratingCount" : "1"
        }
      }
    `
    document.head.appendChild(script);
  }, []);

  return (
    <Row noGutters>
      <Col 
        sm={12}
        lg={6}
        className="d-flex"
        style={{ 
          background: `url("${bg}") content-box center / cover no-repeat`,
          height: "100vh" 
        }}>
        <img 
          style={{
            height: "95vh"
          }}
          className='img-fluid m-auto'
          alt="Dirty Clean"
          src={mobile} 
        />
      </Col>
      <Col
        style={{
          background: "#212121"
        }}
        className="d-flex" 
        sm={12}
        lg={6}>
        <div 
          style={{
            color: "whitesmoke"
          }}
          className="p-5 m-auto">
          <h1>Dirty Clean</h1>
          <hr 
            style={{
              borderColor: "whitesmoke"
            }}
          />
          <h5>
            May the broom be with you!
          </h5>
          <br />
          <h5>
            Logic Match2 puzzle game where the player has to learn all the delights of general cleaning and little more. Litter everything up with rubbish or be a brave connoisseur of cleanliness. Only you decide the fate of small areas of the city. Where each character has their own purpose and fear.
          </h5>
          <br />
          <h5>
            Explore different branches of improvements. Reveal all the chains of character interactions. Complete all missions and levels. Learn Zen in dirty cleaning. May the broom be with you!
          </h5>
          <br />
          <h1>Download Now</h1>
          <hr 
            style={{
              borderColor: "whitesmoke"
            }}
          />
          <Buttons />
        </div>
      </Col>
    </Row>
  )
}