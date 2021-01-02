import { Button, Row, Col } from "reactstrap";
import React from "react";
import { Layout } from "../src/components/Layout";
import { config } from "../config";
import { Footer } from "../src/components/Footer";
import Image from "next/image";

const bg = "/images/back2-min.jpg";
const mobile = "/images/mobile-dirtyclean.png";

export const DirtyClean = () => {

  return (
    <Layout 
      structuredData={{
        "@context" : "https://schema.org",
        "@type" : "MobileApplication",
        "name" : "Dirty Clean",
        "image" : config.domain + mobile,
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
          "ratingValue" : 5,
          "ratingCount" : 1
        }
      }}
      keywords="dirty, clean, mobile, puzzle, simple, casual, game, match2"
      description="Logic Match2 puzzle game where the player has to learn all the delights of general cleaning and little more. Explore different branches of improvements"
      title="Dirty Clean. Mobile, casual, simple match2 puzzle game.">
      <Row noGutters>
        <Col 
          sm={12}
          lg={6}
          className="d-flex"
          style={{ 
            background: `url("${bg}") content-box center / cover no-repeat`,
            height: "100vh" 
          }}>
          <div className="m-auto" style={{
            maxHeight: "95vh"
          }}>
            <Image 
              height={1000}
              width={500}
              alt="Dirty Clean"
              src={mobile} 
              className="img-fluid"
            />
          </div>
        </Col>
        <Col
          style={{
            minHeight: "100vh",
            background: "#212121"
          }}
          className="d-flex" 
          sm={12}
          lg={6}>
          <div 
            style={{
              color: "whitesmoke",
              fontSize: 20
            }}
            className="p-5 m-auto">
            <h1>Dirty Clean</h1>
            <hr 
              style={{
                borderColor: "whitesmoke"
              }}
            />
            <p>
              May the broom be with you!
            </p>
            <p>
              Logic Match2 puzzle game where the player has to learn all the delights of general cleaning and little more. Litter everything up with rubbish or be a brave connoisseur of cleanliness. Only you decide the fate of small areas of the city. Where each character has their own purpose and fear.
            </p>
            <p>
              Explore different branches of improvements. Reveal all the chains of character interactions. Complete all missions and levels. Learn Zen in dirty cleaning. May the broom be with you!
            </p>
            <h1>Download Now</h1>
            <hr 
              style={{
                borderColor: "whitesmoke"
              }}
            />
            <Button 
              className="mr-2 mb-2"
              href="https://apps.apple.com/ru/app/dirty-clean/id1541008540"
              size="lg">
              <i className="fab fa-apple mr-2" />
              iOS
            </Button>
            <Button 
              className="mr-2 mb-2"
              href="https://play.google.com/store/apps/details?id=com.VIPSoftware.DirtyClean&hl=ru&gl=US"
              size="lg">
              <i className="fab fa-android mr-2" />
              Android
            </Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </Layout>
  )
}

export default DirtyClean;