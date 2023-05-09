import "./style/Admindash.css";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import {Link} from 'react-router-dom'
const AdminDashBoard = () => {
    return ( 
      
             
                <div className="col-3  admin-card " >
                    
                
                    
                    <div className="card-info ">
                        <button><Link to={"managecart"}><h2 className="title">Manage Cart</h2></Link></button>
                        <button><Link to={"manageusers"}><h2 className="title">Manage Users</h2></Link></button>
                        <button><Link to={"managecategory"}><h2 className="title">Manage Category</h2></Link></button>
                        <button><Link to={"manageproduct"}><h2 className="title">Manage Product</h2></Link></button>
                        
                    </div> 
        
                          </div>
        
                       
    
    )}

 
export default AdminDashBoard;