import '../style/productcardcomponent.css';
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import {Link} from 'react-router-dom'
const ProductCardcomp = (props) => {
    return ( 

     
        <div className="col-3  product-card-comp">
            
            <div className="card-top">
                <img 
                    src={props.image}
                    alt='card-top'
                />
            </div>
            <div className="card-description">
                 
                    {props.description}
                    
                
            </div>
            <div className="card-info">
                <button><Link to={'/product-info/'+props.name}><h2 className="title">{props.name}</h2></Link></button>
                
            </div> 
                  {/* <Button variant="light"><Link to={'/product-info/'+props.name}><h2 className="title">{props.name}</h2></Link></Button>{' '} */}

                  </div>

               

     );
}
 
export default ProductCardcomp;