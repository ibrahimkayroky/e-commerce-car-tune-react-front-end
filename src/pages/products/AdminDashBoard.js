import "./style/Admindash.css";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import {Link} from 'react-router-dom'
const AdminDashBoard = () => {
    return ( 
      
             
                <div className="col-3  admin-card " >
                    
                
                    
                    <div className="card-info ">
                        <button><Link to={"managecart"}><h2 className="title">ManageCart</h2></Link></button>
                        <button><Link to={"manageusers"}><h2 className="title">ManageUsers</h2></Link></button>
                        <button><Link to={"managecategory"}><h2 className="title">ManageCategory</h2></Link></button>
                        <button><Link to={"manageproduct"}><h2 className="title">ManageProduct</h2></Link></button>
                        
                    </div> 
        
                          </div>
        
                       
    
    )}

 
export default AdminDashBoard;