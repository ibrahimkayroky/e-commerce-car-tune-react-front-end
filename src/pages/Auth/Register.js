import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const register = () => {
 
    return (
        <div className="login-container">
        <h1 className="hhh">Register</h1>
  
        
  
        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="First Name"
            />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Last Name"
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Email"
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Phone Number"
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="Address"
            />
          </Form.Group>
          
  
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="City"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="text"

              placeholder="Password"
              ></Form.Control>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Control
              className="form-control"
              type="text"

              placeholder="Zip Code"
              ></Form.Control>
          </Form.Group>
  
  
          <Button className="btn btn-dark w-100" variant="primary" type="submit">
            Add New Email
          </Button>
        </Form>
      </div>
    


            );
};
export default register;  