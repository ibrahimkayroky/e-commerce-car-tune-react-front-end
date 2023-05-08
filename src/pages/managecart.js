import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./products/style/manageproduct.css"
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Managecart = () => {
 
  return (
    <div className="manage-products p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage Cart</h3>
        
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
            <th>Image</th>
            <th> Name</th>
            <th> Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <Link
                  to={"update"}
                  className="btn btn-sm btn-primary mx-2">
                  Add
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  >
                  Delete
                </button>
                
            <Link className="btn btn-sm btn-info">
                  Update
                </Link>
                
              </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Managecart;
