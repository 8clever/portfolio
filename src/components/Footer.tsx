import Link from "next/link";
import React from "react";
import { Col, Row } from "reactstrap";

const fb = "https://www.facebook.com/indigo.extreem";
const vk = "https://vk.com/ivanvityaev";
export const github = "https://github.com/8clever";

export const Footer = () => {
  return (
    <Row noGutters className="p-5 footer" style={{
      backgroundColor: "#212121",
    }}>
      <Col>
        <div className="mb-2">
          <Link href="/">Home</Link> <br />
        </div>
        <div>
          <Link href="/dirtyclean">Dirty Clean</Link>
        </div>
      </Col>
      <Col>
        Organization: VIP Software <br/>
        Person: Ivan Vityaev <br />
        Phone: 8(958)500-56-02 <br />
        FaceBook: <a href={fb}>{fb}</a> <br/>
        VK: <a href={vk}>{vk}</a> <br/>
        GitHub: <a href={github}>{github}</a> <br/>
      </Col>
    </Row>
  )
}