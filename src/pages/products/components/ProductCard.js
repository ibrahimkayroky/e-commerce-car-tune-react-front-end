import '../style/ProductCard.css';
import Form from "react-bootstrap/Form";

import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
const ProductCard = (props) => {
    
    return ( 
       
        
        <div className="col-3  product-card" >
            <div className="card-top">
                <img 
                    src={props.image}
                    alt='card-top'
                />
            </div>
            <div className="card-info">
                <h2 className="title">{props.name}</h2>
                <p className="info">{props.description}</p>
                <h2 className="price">{props.price} $</h2>

                  <button >
                    <Link to={'/cart'}>
                    <h5>Add to cart</h5>
                    </Link>
                </button>

            </div>
        </div> 
     );
}
 
export default ProductCard;