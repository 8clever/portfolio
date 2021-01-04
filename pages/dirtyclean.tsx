import { Button, Row, Col } from "reactstrap";
import React from "react";
import { Layout } from "../src/components/Layout";
import { config as systemconfig } from "../config";
import { Footer } from "../src/components/Footer";

const mobile = "/images/mobile-dirtyclean.png";

export const DirtyClean = () => {

  return (
    <Layout 
      structuredData={{
        "@context" : "https://schema.org",
        "@type" : "MobileApplication",
        "name" : "Dirty Clean",
        "image" : systemconfig.domain + mobile,
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
      description="Logic Match2 puzzle game where the player has to learn all the delights of general cleaning and little more. Explore different branches of improvements"
      title="Dirty Clean. Mobile Casual Simple Match2 Puzzle Game.">
      <Row noGutters>
        <Col 
          className="p-0"
          sm={12}
          lg={6}
          style={{ 
            minHeight: "100vh",
            display: "flex"
          }}>
            <iframe 
              frameBorder="0"
              className="m-auto"
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQ47BPZUTjg" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
        </Col>
        <Col
          style={{
            minHeight: "100vh",
            background: "#212121"
          }}
          className="d-flex p-0" 
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
            <h2>Download Now</h2>
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