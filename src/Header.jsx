import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown
import Toast from "react-bootstrap/Toast"; // Import Toast
import ToastContainer from "react-bootstrap/ToastContainer"; // Toast Container
import './Header.css'
import { useState } from "react";

export default function Header() {
  // Track hovering state for the form container
  const [isFormHovered, setIsFormHovered] = useState(false);

  // State to toggle dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);

  // State for toast notification
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <header id="navbar">
        <Navbar expand="lg" className="custom-navbar" >
          <Container style={{ backgroundColor: "none" }}>
            <Navbar.Brand href="#" style={{ fontSize: "28px" }}>
              MovieX3
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Latest</Nav.Link>

                <NavDropdown
                  title="Categories"
                  id="navbarScrollingDropdown"
                  className="no-caret" // Add custom class
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Sci-Fi</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#">Favorite</Nav.Link>
              </Nav>

              <div id="right_nav">
                {/* Notification Button */}
                <Button
                  id="button"
                  style={{ outline: "none", border: "none" }}
                  variant="outline-light"
                  onClick={() => setShowToast(true)}
                >
                  <i className="bi bi-bell-fill"></i>
                </Button>

                {/* User Profile Dropdown */}
                <Dropdown
                  show={showDropdown}
                  onToggle={(isOpen) => setShowDropdown(isOpen)}
                >
                  <Dropdown.Toggle
                    as={Button}
                    id="button"
                    variant="outline-light"
                    style={{ outline: "none", border: "none", background: "none" }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <i className="bi bi-person-circle"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Search Form */}
                <Form
                  className="d-flex"
                  id="form_button"
                  onMouseOver={() => setIsFormHovered(true)} // Set form visible on hover
                  onMouseOut={() => setIsFormHovered(false)} // Hide form when mouse leaves
                >
                  <Form.Control
                    id="form_search"
                    style={{
                      display: isFormHovered ? "block" : "none"
                    }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                  <Button
                    id="button"
                    style={{ outline: "none", border: "none" }}
                    variant="outline-light"
                    onMouseOver={() => setIsFormHovered(true)}
                    onMouseOut={() => setIsFormHovered(false)}
                  >
                    <i className="bi bi-search"></i>
                  </Button>
                </Form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Toast Notification */}
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
      </header>
    </>
  );
}
