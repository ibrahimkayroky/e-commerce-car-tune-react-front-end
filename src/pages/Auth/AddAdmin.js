import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
 
    return (
        <div className="login-container">
        <h1>Add New Admin Form</h1>
  
        
  
        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="UserName"
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="text"

              placeholder="Password"
              ></Form.Control>
          </Form.Group>
  
  
          <Button className="btn btn-dark w-100" variant="primary" type="submit">
            Add New Admin
          </Button>
        </Form>
      </div>
    


            );
};
export default AddAdmin; 