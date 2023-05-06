import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


import { useParams } from "react-router-dom";

const Updatecategory = () => {

  return (
    <div className="login-container">
      <h1>Update category Form</h1>

     

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
            placeholder="category Name"
           />
        </Form.Group>

        <Form.Group className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            ></textarea>
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control"  />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Update category
        </Button>
      </Form>
    </div>
  );
};

export default Updatecategory;
