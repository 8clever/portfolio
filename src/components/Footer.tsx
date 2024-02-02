import Link from "next/link";
import React from "react";
import { Col, Row, Nav, NavItem } from "reactstrap";

const lin = "https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B2%D0%B8%D1%82%D1%8F%D0%B5%D0%B2-a9566924b/";
const linCompany = "https://www.linkedin.com/company/101554038/admin/feed/posts/";
const hc = "https://career.habr.com/8clever";
export const gh = "https://github.com/8clever";

export const Footer = () => {
  return (
    <Row 
      noGutters
      className="p-5 gx-5 footer" style={{
      backgroundColor: "#212121",
    }}>
      <Col md={{
        size: 4,
        offset: 1
      }}>
        Organization: <Link target="_blank" href={linCompany}>VIP Software</Link> <br/>
        Person: Ivan Vityaev <br />
        Phone: 8(958)500-56-02 <br />
        e-mail: godofluck89@gmail.com
      </Col>
      <Col 
        className="text-right"
        md={{ size: 2, offset: 1 }}>
        <Nav vertical>
          <NavItem>
            <Link href="/">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/dirtyclean">
              Dirty Clean
            </Link>
          </NavItem>
        </Nav>
      </Col>
      <Col 
        className="text-right"
        md={2}>
        <Nav vertical>
          <NavItem>
            <Link target="_blank" href={lin}>
              LinkedIn
            </Link>
          </NavItem>
          <NavItem>
            <Link target="_blank" href={hc}>
              Habr Career
            </Link>
          </NavItem>
          <NavItem>
            <Link target="_blank" href={gh}>
              GitHub
            </Link>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  )
}