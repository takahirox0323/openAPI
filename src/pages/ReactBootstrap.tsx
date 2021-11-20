import React, { useContext, useRef, useState, createContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Stack,
  Table,
  Alert,
  Accordion,
  Offcanvas,
  NavDropdown,
  FormControl,
  Form,
  Card,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//色を変えたい時は、CSSで変えて感が強い
//→classでスタイリングすることを想定されている
//アイコンは別ライブラリ

//ひとつひとつのライブラリが独立している
//→materialUIだと組み合わさっているので、スピードは出そう。
//もし利用するなら完結するmaterialUI?antUI?

export const ReactBootstrap: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Navigation />
      <Container
        style={{
          marginTop: "74px",
          maxWidth: "none",
          padding: "20px 20px",
          width: "100%",
        }}
      >
        <Button variant="primary">Primary</Button>
        <TableComponent />
        <AlertComponent />
        <AccordionComponent />

        <Stack direction="horizontal" gap={3}>
          <Col xs={12} sm={6} md={3}>
            <CardComponent />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <CardComponent />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <CardComponent />
          </Col>
          <Col xs={12} sm={6} md={3}>
            <CardComponent />
          </Col>
        </Stack>
      </Container>
    </>
  );
};
const Wrapper = styled.div`
  background: #fafafd;
  min-height: 100vh;
`;

function Navigation(props) {
  return (
    <Navbar
      fixed="top"
      expand={false}
      style={{
        height: "64px",
        background: "#2196f3",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      }}
    >
      <Container fluid>
        <Stack direction="horizontal">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{ color: "#fff" }}
          />
          <Navbar.Brand href="#" style={{ color: "#fff" }}>
            Navbar Offcanvas
          </Navbar.Brand>
        </Stack>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
function CardComponent(props) {
  return (
    <Card style={{ flex: 1 }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
function AlertComponent(props) {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}
function TableComponent(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

function AccordionComponent(props) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
