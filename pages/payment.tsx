import { Layout } from "../src/components/Layout";
import QRCode from "qrcode.react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
import React from "react";

export const Payment = () => {

  const [ adress, setAdress ] = React.useState("");

  const [ payer, setPayer ] = React.useState("");

  const [ amount, setAmount ] = React.useState("500");

  const payment = `ST00012|Name=ООО "АРК-Телеком"|PersonalAcc=40702810200000124669|BankName=ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)|BIC=044525411|CorrespAcc=30101810145250000411|KPP=503201001|PayeeINN=5032232243|lastName=${payer}|payerAddress=${adress}|Purpose=За Интернет|Sum=${amount}00`

  return (
    <Layout 
      ignoreValidation
      title="Online Payment">
      <div className="container">
        <Row>
          <Col md={{
            size: 8,
            offset: 2
          }}>
            <div className="qr-container">
              <QRCode 
                value={payment}
              />
            </div>
            <h1>ООО "АРК-Телеком"</h1>
            <div>ИНН: 5032232243</div>
            <div>КПП: 503201001</div>
            <div>Р/С: 40702810200000124669</div>
            <div>Наименование банка: ФИЛИАЛ "ЦЕНТРАЛЬНЫЙ" БАНКА ВТБ (ПАО)</div>
            <div>БИК: 044525411</div>
            <div>К/С: 30101810145250000411</div>
            <FormGroup>
              <Label>Адрес</Label>
              <Input 
                placeholder="Рублёвский проезд, д.20б, кв.103"
                value={adress}
                onChange={e => {
                  setAdress(e.target.value)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Плательщик</Label>
              <Input 
                placeholder="Иванов Пётр Петрович"
                value={payer}
                onChange={e => {
                  setPayer(e.target.value)
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cумма (р.)</Label>
              <Input 
                type="number"
                placeholder="500"
                value={amount}
                onChange={e => {
                  console.log(e)
                  setAmount(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
          
        }
        @media (min-width: 576px) {
          .container {
            margin-top: 60px;
          }
        }
        .qr-container {
          display: inline-block;
          padding-right: 10px;
          padding-bottom: 5px;
          margin-top: 15px;
          margin-bottom: 15px;
          border-bottom: 1px solid black;
          border-right: 1px solid black;
        }
      `}</style>
    </Layout>
  )
}

export default Payment;