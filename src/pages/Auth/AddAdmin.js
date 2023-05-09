
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { setAuthUser } from "../../helper/Storage";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";


const AddAdmin = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    city: "",
    zip_code: "",

   
  });

  // const RegisterFun = (e) => {
  //   e.preventDefault();
  //   setRegister({ ...register, loading: true, err: [] });
  //   axios
  //     .post("http://localhost:3000/auth/register", {
  //       first_name: register.first_name,  
  //       last_name: register.last_name,
  //       email: register.email,
  //       password: register.password,
  //       phone_number: register.phone_number,
      
  //       address: register.address,
  //       city: register.city,
  //       zip_code: register.zip_code,
        
  //     })
  //     .then((resp) => {
  //       setRegister({ ...register, loading: false, err: [] });
  //       setAuthUser(resp.data);
  //       navigate("/");
  //     })
  //     .catch((errors) => {
  //       setRegister({
  //         ...register,
  //         loading: false,
  //         err: errors.response.data.errors,
  //       });
  //     });
  // };
  const RegisterFun = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true, err: [] });
  
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: register.first_name,
        last_name: register.last_name,
        email: register.email,
        password: register.password,
        phone_number: register.phone_number,
        address: register.address,
        city: register.city,
        zip_code: register.zip_code
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRegister({ ...register, loading: false, err: [] });
        setAuthUser(data);
        navigate("/");
      })
      .catch((error) => {
        setRegister({
          ...register,
          loading: false,
          err: [error.message]
        });
      });
  };
  
    return (
        <div className="login-container">
        <h1 className="hhh">Register</h1>
        {/* {register.err.map((error, index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.msg}
        </Alert>
      ))} */}
        
  
        <Form onSubmit={RegisterFun}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="First Name"
              value={register.first_name}
            onChange={(e) => setRegister({ ...register, first_name: e.target.value })}
          
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Last Name"
              value={register.last_name}
            onChange={(e) => setRegister({ ...register, last_name: e.target.value })}
          
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Email"
              value={register.email}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Phone Number"
              value={register.phone_number}
              onChange={(e) =>
                setRegister({ ...register, phone_number: e.target.value })
              }
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Address"
              value={register.address}
              onChange={(e) =>
                setRegister({ ...register, address: e.target.value })
              }
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="City"
              value={register.city}
              onChange={(e) =>
                setRegister({ ...register, city: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="password"
              placeholder="Password"

              value={register.password}
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }/>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="text"

              placeholder="Zip Code"
              
              value={register.zip_code}
              onChange={(e) =>
                setRegister({ ...register, zip_code: e.target.value })
              }
              ></Form.Control>
          </Form.Group>
  
  
          <Button
          className="btn btn-dark w-100"
          variant="primary"
          type="submit"
          disabled={register.loading === true}>
          register
        </Button>
        </Form>
      </div>
    


            );
};
export default AddAdmin;  