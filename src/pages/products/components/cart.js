import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from 'react-router-dom';
import Table from "react-bootstrap/Table";
const Cart = () => {
    return (
        <div className="manage-movies p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage cart</h3>
        
      </div>
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
              
                <button
                  className="btn btn-sm btn-danger"
                  >
                  Delete
                </button>
               
                
              </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>


      );
}
         
export default Cart;