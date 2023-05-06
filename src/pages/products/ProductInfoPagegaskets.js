import ProductCard from "./components/ProductCard";
import './style/ProductsList.css';
import { data } from '../../core/data/gaskets.js';
import EmptyProduct from "./components/EmptyProduct";
const ProductsListPage = () => {
    const gasketsData = data;
    const watchNow = (id) => {
        console.log('we clicked in product id =', id);
    }
    //  a function that return movies
    const displayproduct = () => {
        if (gasketsData.length === 0) {
            return <EmptyProduct />;
        }
        else {
            return gasketsData.map(
                (gaskets) => {
                    /* Here he will ask you for a unique identifier for the element
                    in order not to reload every element when the list changes
                     he only want to change the item with the specific id*/
                    //  Here I also send some props it's like parameters that we send to function
                    return < ProductCard
                        key={gaskets.id}
                        id={gaskets.id}
                        name={gaskets.name}
                        namecategory={gaskets.namecategory}
                        description={gaskets.description}
                        image={gaskets.image}
                        price={gaskets.price}
                        watch={watchNow}
                    />;
                }
            )
        }
    }
    return <div className="products-list">{displayproduct()}</div>;
}

export default ProductsListPage;