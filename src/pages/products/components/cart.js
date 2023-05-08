import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from 'react-router-dom';
import Table from "react-bootstrap/Table";
const Cart = () => {
    return (
        <div className="manage-movies p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Show Cart</h3>
        <Link to={"UserHistory"} className="btn btn-success">
          Show History
        </Link>
        
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
            <td></td>
            <td></td>
            <td></td>
            
               <td> 
              
               <Link
                  to={"CheckOut"}
                  className="btn btn-sm btn-primary mx-2">
                  Accept
                </Link>
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