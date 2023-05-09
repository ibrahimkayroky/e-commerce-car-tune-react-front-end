import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../products/style/manageproduct.css";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import UpdateProduct from "../manage-product/updateproduct";
import "../products/style/manageproduct.css";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

  

const Managecategory = () => {
  const auth = getAuthUser();
  const [category, setCategory] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });
  useEffect(() => {
    setCategory({ ...category, loading: true });
    axios
      .get("http://localhost:3000/admin/updateCategory")
      //admin/updateCategory/2
      .then((resp) => {
        setCategory({ ...category, results: resp.data, loading: false, err: null });
      })
      .catch((err) => {
        setCategory({
          ...category,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [category.reload]);
  const updateCategoryItem = (id) => {
    axios
      .delete("http://localhost:3000/admin/updateCategory/" + id, {
        headers: {
          token: auth[0].token,
        },
      })
      .then((resp) => {
        setCategory({ ...category, reload: category.reload + 1 });
      })
      .catch((err) => {});
  };
  const deleteCategory = (id) => {
    axios
      .delete("http://localhost:4000/admin/delete/" + id, {
        headers: {
          token: auth[0].token,
        },
      })
      .then((resp) => {
        setCategory({ ...category, reload: category.reload + 1 });
      })
      .catch((err) => {});
  };


  return (
    <div className="manage-products p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage category</h3>
        <Link to={"add"} className="btn btn-success">
          Add New category 
        </Link>
      </div>

      {/* <Alert variant="danger" className="p-2">
        This is simple alert
      </Alert>

      <Alert variant="success" className="p-2">
        This is simple alert
      </Alert> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th> Name</th>
            <th> Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
               <td>
                <button
                  className="btn btn-sm btn-danger">
                  <Link to = {"delete"}
                  className="btn btn-sm btn-info">
                    onClick={(e) => {
                    deleteCategory(category.category_id);
                  }}
                  delete
                </Link>

                </button>
                
                
                <Link
                  to={"update" + category.category_id}
                  className="btn btn-sm btn-primary mx-2">
                  Update
                </Link>

                <Link className="btn btn-sm btn-info">
                  show
                </Link>


              </td>
              </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Managecategory;
