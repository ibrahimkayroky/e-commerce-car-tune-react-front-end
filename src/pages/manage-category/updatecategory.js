import React, { useState, useRef, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../products/style/add.css";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
import { useParams } from "react-router-dom";

const Updatecategory = () => {
  let { id } = useParams();
  const auth = getAuthUser();
  const [category, setCategory] = useState({
    category_name: "",
    description: "",
    category_img: null,
    err: "",
    loading: false,
    reload: false,
    success: null,
  });
  const image = useRef(null);

  const updateCategory = (e) => {
    e.preventDefault();

    setCategory({ ...category, loading: true });

    const formData = new FormData();
    formData.append("name", category.category_name);
    formData.append("description", category.description);
    if (image.current.files && image.current.files[0]) {
      formData.append("image", image.current.files[0]);
    }
    axios
      .put("http://localhost:3000/admin/updateCategory/" + id, formData, {
        headers: {
          token: auth[0].token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        setCategory({
          ...category,
          loading: false,
          success: "category updated successfully !",
          reload: category.reload + 1,
        });
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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/admin/updateCategory/" )
  //     .then((resp) => {
  //       setCategory({
  //         ...category,
  //         name: resp.data.name,
  //         description: resp.data.description,
  //         image_url: resp.data.image_url,
  //       });
  //     })
  //     .catch((err) => {
  //       setCategory({
  //         ...category,
  //         loading: false,
  //         success: null,
  //         err: "Something went wrong, please try again later !",
  //       });
  //     });
  // }, [category.reload]);
  return (
    <div className="login-container">
      <h1 className="add-category">Update Category</h1>

      {category.err && (
        <Alert variant="danger" className="p-2">
          {category.err}
        </Alert>
      )}

      {category.success && (
        <Alert variant="success" className="p-2">
          {category.success}
        </Alert>
      )}

      <Form onSubmit={updateCategory} className="text-center py-2">
        <img
          style={{
            width: "50%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}

          src={category.category_image}
        />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Category Name"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
         
           />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            className="form-control"
            placeholder="Description"
            value={category.description}
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
            />
        </Form.Group>
        


        <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image} />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Update category
        </Button>
      </Form>
    </div>
  );
};

export default Updatecategory;
