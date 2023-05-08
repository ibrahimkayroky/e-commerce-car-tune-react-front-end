import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
// import ".../products/style/add.css";

const CheckOut = () => {

  return (
    <div className="login-container">
      <h1 className="add-category">CheckOut</h1>

      

      <Form >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Visa Number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Visa Type"
          
            />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          CheckOut
        </Button>
      </Form>
    </div>
  );
};

export default CheckOut;
