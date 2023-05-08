import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../products/style/add.css";

const Addcategory = () => {

  return (
    <div className="login-container">
      <h1 className="add-category">Add Category</h1>

      

      <Form >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="category Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Description"
          
            />
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control"  required />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New category
        </Button>
      </Form>
    </div>
  );
};

export default Addcategory;
