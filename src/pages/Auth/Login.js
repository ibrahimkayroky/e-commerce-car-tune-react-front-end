import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../../../src/pages/products/style/Login.css";

import {Link} from 'react-router-dom'


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
          className=" btn btn-lg btn-secondary "
          type="submit"
          >
          Login
        </Button>
        <Link
                  to={"Register"}
                  className="btn  btn-lg btn-secondary  ">
                  Register
                </Link>
      </Form>
    </div>
  );
};

export default Login;
