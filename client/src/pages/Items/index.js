import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateItemForm from "../components/CreateItemForm";
import ItemsList from "../components/ItemsList";

const Item = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateItemForm />
        </Col>
        <Col size="md-6 sm-12">
          <ItemsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
