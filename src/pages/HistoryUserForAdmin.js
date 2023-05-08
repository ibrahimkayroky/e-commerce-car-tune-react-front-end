import "./products/style/manageproduct.css"
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
const History = () => {
    return ( 
        <div className="manage-products p-5">
                <div className="header d-flex justify-content-between mb-5">
                    <h3 className="textcenter ">History</h3></div>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Address</th>
            <th>Product</th>
            <th>OrderDate</th>
            <th>TotalPrice</th>
            
          </tr>
        </thead>
        <tbody>
          {
            <tr>
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
}
 
export default History;