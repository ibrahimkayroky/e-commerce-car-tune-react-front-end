import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import ProductsListPage from "./pages/products/ProductsListPage";
import App from './App'
import NotFound from "./shared/NotFound";
import ProductInfoPagetrans from "./pages/products/ProductInfoPagetrans";
import ProductInfoPageair from "./pages/products/ProductInfoPageair";
import ProductInfoPagebrake from "./pages/products/ProductInfoPagebrakes";
import ProductInfoPagegaskets from "./pages/products/ProductInfoPagegaskets";
import ProductInfoPageexhuast from "./pages/products/ProductInfoPageexhaust";
import ProductInfoPageturbo from "./pages/products/ProductInfoPageturbo";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Manageproducts from "./pages/manage-product/manageproduct";
import AddProduct from "./pages/manage-product/addproduct";
import Cart from "./pages/products/components/cart";
import UpdateProduct from "./pages/manage-product/updateproduct";
import Managecategory from "./pages/manage-category/managecategory";
import Addcategory from "./pages/manage-category/addcategory";
import Updatecategory from "./pages/manage-category/updatecategory";
import Managecart from "./pages/managecart";
import Manageusers from "./pages/manageuser";
import AdminDashBoard from "./pages/products/AdminDashBoard";
import AddAdmin from "./pages/Auth/AddAdmin";
import History from "./pages/History";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // Nesting routes => Here the things in app will appear in all pages
        children: [
            {
                path: '/',
                element: <ProductsListPage />,
            },
            {
        
                path: '/product-info/Turbo',
                element: <ProductInfoPageturbo />,
            },
            {
        
                path: '/product-info/Air-Intake-System',
                element: <ProductInfoPageair />,
            },
            {
        
                path: '/product-info/Transmission',
                element: <ProductInfoPagetrans />,
            },
            {
        
                path: '/product-info/Brake-System',
                element: <ProductInfoPagebrake />,
            },
            
            {
        
                path: '/product-info/Exhaust-System',
                element: <ProductInfoPageexhuast />,
            },
            {
        
                path: '/product-info/gaskets/:id',
                element: <ProductsListPage />,
            },
            {
        
                path: '/product-info/gaskets',
                element: <ProductInfoPagegaskets />,
            },
            
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
            },
            
            {
                path: '/Login',
                element: <Login />,
            },
            {
                path: '/Register',
                element: <Register />,
            },

            {
                path: "/cart",
                element: <Cart />,
            },

            {
                path: "/AdminDashBoard",
                element: <AdminDashBoard/>,
            },
            {
                path: "/AdminDashBoard",
            
                children: [
                  {
                    path: "manageproduct",
                    element: <Manageproducts />,
                  },
                  {
                    path: "manageproduct/add",
                    element: <AddProduct />,
                  },
                  {
                    path: "manageproduct/update",
                    element: <UpdateProduct />,
                  },
               
                  
                ],
              },
             
              {
                path: "/AdminDashBoard",
            
                children: [
                  {
                    path: "managecategory",
                    element: <Managecategory />,
                  },
                  {
                    path: "managecategory/add",
                    element: <Addcategory />,
                  },
                  {
                    path: "managecategory/update",
                    element: <Updatecategory />,
                  },
                
                  
                ],
              },
              {
                path: "/AdminDashBoard/managecart",
                element:<Managecart/>,
              },
              {
                path: "/AdminDashBoard/manageusers",
                element: <Manageusers/>,
              },
              {
                path:"/AdminDashBoard/manageusers/AddAdmin/",
                element:<AddAdmin/>
              },
              {
                path: '/login/Register',
                element: <Register />,
            },
            
              
            {
              path: '/AdminDashBoard/manageusers/History',
              element: <History />,
          },
            
        ]
    },
    {
        // WILD CARD ROUTE => The route that will appear to user if he write any
        // other text in the url
        path: '*',
        element: <NotFound />,
    }

]);