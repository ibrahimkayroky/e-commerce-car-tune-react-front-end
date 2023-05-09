import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../products/style/add.css";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
const AddProduct = () => {
  
    const auth = getAuthUser();
    const [product, setProduct] = useState({
      name: "",
      description: "",
      price: "",
      category_name: "",
      orders_product: "",
      image: "",
      err: "",
      loading: false,
      success: null,
    });
   
    const image = useRef(null);
  
    const createProduct = (e) => {
      e.preventDefault();
  
      setProduct({ ...product, loading: true });
  
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("category_name", product.category_name); 
      formData.append("orders_product", product.orders_product); 
      if (image.current.files && image.current.files[0]) {
        formData.append("image", image.current.files[0]);
      }
      console.log(product)
      axios
        .post("http://localhost:3000/admin/createProduct", formData, {
          headers: {
            token: auth[0].token,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          setProduct({
            name: "",
            description: "",
            price: "",
            category_name: "",
            orders_product: "",
            image: "",
            err: "",
            loading: false,
            success: "Product Created Successfully !",
          });
          image.current.value = null;
        })
        .catch((err) => {
          setProduct({
            ...product,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
    };
  
  return (
    <div className="login-container">
      <h1 className="add-Product">Add Product</h1>
      {product.err && (
        <Alert variant="danger" className="p-2">
          {product.err}
        </Alert>
      )}

      {product.success && (
        <Alert variant="success" className="p-2">
          {product.success}
        </Alert>
      )}
      

      <Form onSubmit={createProduct}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            required
            placeholder="Product Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Description"
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            
          
            />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="category_name"
            value={product.category_name}
            onChange={(e) => setProduct({ ...product, category_name: e.target.value })}
            />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
             type="text"
            className="form-control"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            
          
            />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
             type="text"
            className="form-control"
            placeholder="orders_product"
            value={product.orders_product}
            onChange={(e) => setProduct({ ...product, orders_product: e.target.value })}
            
          
            />
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image} required />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New Product
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
