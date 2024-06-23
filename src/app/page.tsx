'use client'

import { Button, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <h1 className="fw-bold">Hello world</h1>
          <Button variant="primary" className="mt-5" onClick={() => window.alert('hello')}>Click Me</Button>
        </Col>
      </Row>
    </Container>
  );
}