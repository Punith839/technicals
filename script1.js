import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Welcome!");
  const [darkMode, setDarkMode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container className={darkMode ? "bg-dark text-light py-4" : "py-4"}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="nameInput">
            <Form.Label>Enter your name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mt-2"
            onClick={() => setGreeting(name ? `Hello, ${name}!` : "Welcome!")}
          >
            Greet Me
          </Button>
          <h3 className="mt-3">{greeting}</h3>
        </Col>
        <Col md={6} className="text-md-end mt-3 mt-md-0">
          <Button variant={darkMode ? "light" : "dark"} onClick={() => setDarkMode(!darkMode)}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Button variant="info" onClick={() => setShowMessage(!showMessage)}>
            {showMessage ? "Hide" : "Show"} Message
          </Button>
          {showMessage && <p className="mt-2">👋 Hello there! This is a hidden message.</p>}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div>
            <strong>Numbers:</strong>{" "}
            {Array.from({ length: 10 }, (_, i) => i + 1).join(" ")}
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <div>
            <strong>Live Clock:</strong> {time.toLocaleTimeString()}
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col className="d-flex align-items-center">
          <Button variant="secondary" onClick={() => setCount(count - 1)}>
            –
          </Button>
          <span className="mx-3 fs-4">{count}</span>
          <Button variant="secondary" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
