import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../products/style/manageproduct.css";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";


const UserHistory = () => {
 
  return (
    <div className="manage-products p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">History</h3>
    
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
            <th>ProductName</th>
            <th>TotalPrice</th>
            <th>OrderDate</th>
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
                
              </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default UserHistory;
