import ProductCard from "./components/productcardcomponent";
import './style/ProductsList.css';
import { data } from '../../core/data/product.js';
import EmptyProduct from "./components/EmptyProduct";
const ProductsListPage = () => {
    const productData = data;
    const watchNow = (id) => {
        console.log('we clicked in product id =', id);
    }
    //  a function that return
    const displayproduct = () => {
        if (productData.length === 0) {
            return <EmptyProduct />;
        }
        else {
            return productData.map(
                (product) => {
                    /* Here he will ask you for a unique identifier for the element
                    in order not to reload every element when the list changes
                     he only want to change the item with the specific id*/
                    //  Here I also send some props it's like parameters that we send to function
                    return < ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        watch={watchNow}
                    />;
                }
            )
        }
    }
    return <div className="products-list">{displayproduct()}</div>;
}

export default ProductsListPage;