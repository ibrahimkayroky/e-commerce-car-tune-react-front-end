import '../style/Header.css';
import image from '../assets/images/logo.jpg';
import im from '../assets/images/icons8-shopping-cart-24.png';
import {Link} from 'react-router-dom';
import "../style/Header.css";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { removeAuthUser, getAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const auth = getAuthUser();
    const Logout = () => {
      removeAuthUser();
      navigate("/");
    };
  
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link className="nav-link" to={"/"}>
                  mostrocar
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
              
    
                {/* unAuthenticated Route  */}
                {!auth && (
                  <>
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                    <Link className="nav-link" to={"/register"}>
                      Register
                    </Link>
                  </>
                )}
    
                {/* Admin Routes  */}
    
                {auth && auth.role === 1 && (
                  <>
                    <Link className="nav-link" to={"/manage-movies"}>
                      Manage Product
                    </Link>
                  </>
                )}
              </Nav>
    
              <Nav className="ms-auto">
                {/* Authenticated Routes  */}
                {auth && <Nav.Link onClick={Logout}>Logout</Nav.Link>}
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    };
    
    export default Header;
    