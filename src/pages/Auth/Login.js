import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../../../src/pages/products/style/Login.css";


import { useNavigate } from "react-router-dom";

const Login = () => {
 
  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <Form >
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            required
            
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            required
           
          />
        </Form.Group>

        <Button
          className="btn btn-dark w-100"
          variant="primary"
          type="submit"
          >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
