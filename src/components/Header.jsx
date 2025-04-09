import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import { allMovie, dataMovie } from "./Data";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "./Header.css";
import { useLocation } from "react-router-dom";
import { Login } from "./Modal-login";
import SearchForm from "./SearchForm";

export default function Header({ isSearch, setIsSearch, setMovies }) {

  const [showDropdown, setShowDropdown] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle scroll event to update header styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // If user scrolls more than 50px, the navbar will appear
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically adjust navbar style based on scroll position and current route
  const navbarStyle = {
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    background: isScrolled ? "#212529" : "transparent",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
    display: (location.pathname === "/" || isScrolled) ? "block" : "none", // Show on Home page or when scrolled
  };


  return (
    <>
      <Navbar expand="lg" className="navbar-dark" style={navbarStyle}>
        <Container>
          <Navbar.Brand href="#" style={{ fontSize: "28px" }}>
            MovieX3
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href={"./MovieX3/" + dataMovie.find(e => e.id === "Latest Movies").id}>Latest</Nav.Link>

              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href={"./MovieX3/" + dataMovie.find(e => e.id === "Action Movies").id}>Action</NavDropdown.Item>
                <NavDropdown.Item href={"./MovieX3/" + dataMovie.find(e => e.id === "Dramas").id}>Drama</NavDropdown.Item>
                <NavDropdown.Item href={"./MovieX3/" + dataMovie.find(e => e.id === "Sci-Fi").id}>Sci-Fi</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#">Favorite</Nav.Link>
            </Nav>

            <div id="right_nav">
              <Button
                id="button"
                style={{ outline: "none", border: "none" }}
                variant="outline-light"
                onClick={() => setShowToast(true)}
              >
                <i className="bi bi-bell-fill"></i>
              </Button>

              <Dropdown
                show={showDropdown}
                onToggle={(isOpen) => setShowDropdown(isOpen)}
              >
                <Dropdown.Toggle
                  as={Button}
                  id="button"
                  variant="outline-light"
                  style={{ outline: "none", border: "none", background: "none" }}
                >
                  <i className="bi bi-person-circle"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleShow}>Login/SignUp</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <SearchForm
                setMovies={setMovies}
                setIsSearch={setIsSearch}
                isSearch={isSearch} // Pass isSearch if needed for conditional rendering in SearchForm
                
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          bg="light"
        >
          <Toast.Header>
            <i className="bi bi-bell-fill me-2 text-warning"></i>
            <strong className="me-auto">Notifications</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body>You have new notifications!</Toast.Body>
        </Toast>
      </ToastContainer>

      <Login show={showModal} handleClose={handleClose} />
    </>
  );
}


