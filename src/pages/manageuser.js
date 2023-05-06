import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import "./products/style/manageproduct.css";


const Manageusers = () => {
 
  return (
    <div className="manage-products p-5">
       <Form >
            <Form.Group className="mb-3 d-flex">
              <Form.Control
                type="text"
                placeholder="Search Movies"
                className="rounded-0"
               />
              <button className="btn btn-dark rounded-0">Search</button>
            </Form.Group>
          </Form>
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage Users</h3>
        <Link to={"AddAdmin"} className="btn btn-success">
          Add New Admin +
        </Link>
      </div>

      {/* <Alert variant="danger" className="p-2">
        This is simple alert
      </Alert>

      <Alert variant="success" className="p-2">
        This is simple alert
      </Alert> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
  
            <th> Name</th>
           
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
            <td></td>
            <td></td>
            
               <td>
                <button
                  className="btn btn-sm btn-danger"
                  >
                  Delete
                </button>
                <Link
                  // to={"update"}
                  className="btn btn-sm btn-primary mx-2">
                  History
                </Link>
                
              </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Manageusers;
