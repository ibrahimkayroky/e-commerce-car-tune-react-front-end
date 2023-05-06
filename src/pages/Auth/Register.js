import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const register = () => {
 
    return (
        <div className="login-container">
        <h1>Add New Email Form</h1>
  
        
  
        <Form >
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              required
              placeholder="UserName"
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

              placeholder="ZipCode"
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