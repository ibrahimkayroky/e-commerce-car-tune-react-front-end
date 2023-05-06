import ProductCard from "./components/ProductCard";
import './style/ProductsList.css';
import { data } from '../../core/data/turbo.js';
import EmptyProduct from "./components/EmptyProduct";
const ProductsListPage = () => {
    const turboData = data;
    const watchNow = (id) => {
        console.log('we clicked in product id =', id);
    }
    //  a function that return movies
    const displayproduct = () => {
        if (turboData.length === 0) {
            return <EmptyProduct />;
        }
        else {
            return turboData.map(
                (turbo) => {
                    /* Here he will ask you for a unique identifier for the element
                    in order not to reload every element when the list changes
                     he only want to change the item with the specific id*/
                    //  Here I also send some props it's like parameters that we send to function
                    return < ProductCard
                        key={turbo.id}
                        id={turbo.id}
                        name={turbo.name}
                        namecategory={turbo.namecategory}
                        description={turbo.description}
                        image={turbo.image}
                        price={turbo.price}
                        watch={watchNow}
                    />;
                }
            )
        }
    }
    return <div className="products-list">{displayproduct()}</div>;
}

export default ProductsListPage;