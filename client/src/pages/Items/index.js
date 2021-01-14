import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateItemForm from "../components/CreateItemForm";
import ItemsList from "../components/ItemsList";
import { useAuth0 } from '@auth0/auth0-react';

const Item = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
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
    )
  );
};

export default Item;
