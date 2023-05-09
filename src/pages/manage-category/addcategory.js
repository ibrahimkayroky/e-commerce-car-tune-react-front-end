import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../products/style/add.css";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

const Addcategory = () => {
  const auth = getAuthUser();
  const [category, setCategory] = useState({
    category_name: "",
    description: "",
    category_img:"",
    err: "",
    loading: false,
    success: null,
  });
 
  const category_img = useRef(null);
  console.log(auth[0].token)
  const createCategory = (e) => {
    e.preventDefault();

    setCategory({ ...category, loading: true });

    const formData = new FormData();
    formData.append("category_name", category.category_name);
    formData.append("description", category.description);
      console.log(category_img.current.files[0])
    if (category_img.current.files && category_img.current.files[0]) {
      formData.append("category_img", category_img.current.files[0]);
    }
    console.log(category)

    
    axios
      .post("http://localhost:3000/admin/createCategory", formData, {
        headers: {
          token:auth[0].token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setCategory({
          category_name: "",
          description: "",
          category_img:"",
          err: "",
          loading: false,
          success: "Category Created Successfully !",
        });
        category_img.current.value = null;
      })
      .catch((err) => {
        setCategory({
          ...category,
          loading: false,
          success: null,
          err: "Something went wrong, please try again later !",
        });
      });
  };

  return (
    <div className="login-container">
      <h1 className="add-category">Add Category</h1>

      

      <Form onSubmit={createCategory}>
        <Form.Group className="mb-3">
          <Form.Control
            value={category.name}
            onChange={(e) => setCategory({ ...category, category_name: e.target.value })}
            
            type="text"
            required
            placeholder="category Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Description"
            value={category.description}
            onChange={(e) => setCategory({ ...category, description: e.target.value })}
            
           
          
            />
        </Form.Group>

        <Form.Group className="mb-3">
          
          <input type="file" className="form-control" ref={category_img} required />
          
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New category
        </Button>
      </Form>
    </div>
  );
};

export default Addcategory;
