import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../products/style/add.css";

import { useParams } from "react-router-dom";

const UpdateProduct = () => {

  return (
    <div className="login-container">
      <h1 className="add-category">Update Product</h1>
      <Form className="text-center py-2">
        <img
          style={{
            width: "50%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}
        />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Product Name"
           />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Description"
            /></Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Price"
            />
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control"  />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProduct;
