import Link, { LinkProps } from "next/link";
import React from "react";
import { Col, Row } from "reactstrap";

const fb = "https://www.facebook.com/indigo.extreem";
const vk = "https://vk.com/ivanvityaev";
export const github = "https://github.com/8clever";


const LinkButton = (props: LinkProps & { children: React.ReactNode }) => {
  return (
    <div className="mb-2">
      <Link {...props} />
    </div>
  )
}

export const Footer = () => {
  return (
    <Row 
      noGutters
      className="p-5 gx-5 footer" style={{
      backgroundColor: "#212121",
    }}>
      <Col 
        md={2}>
        <LinkButton href="/">
          Home
        </LinkButton>
        <LinkButton href="/dirtyclean">
          Dirty Clean
        </LinkButton>
      </Col>
      <Col 
        md={2}>
        <LinkButton href={fb}>
          FaceBook
        </LinkButton>
        <LinkButton href={vk}>
          VK
        </LinkButton>
        <LinkButton href={github}>
          GitHub
        </LinkButton>
      </Col>
      <Col md={{
        size: 4,
        offset: 4
      }}>
        Organization: VIP Software <br/>
        Person: Ivan Vityaev <br />
        Phone: 8(958)500-56-02 <br />
        e-mail: godofluck89@gmail.com
      </Col>
    </Row>
  )
}