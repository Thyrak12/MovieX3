import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

export default function Header() {
  // Track hovering state for the form container
  const [isFormHovered, setIsFormHovered] = useState(false);

  // Determine whether the form should be visible or not
  const isFormVisible = isFormHovered;

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#" style={{fontSize : "28px"}} >MovieX3</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Latest</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Sci-Fi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Favorite</Nav.Link>
          </Nav>

          {/* Form with search input */}
          <Form
            className="d-flex"
            id="form_button"
            onMouseOver={() => setIsFormHovered(true)} // Set form visible on hover
            onMouseOut={() => setIsFormHovered(false)}  // Hide form when mouse leaves
          >
            <Form.Control
              id="form_search"
              style={{ display: isFormVisible ? "block" : "none" }} // Show when hovering over form container
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              id="button"
              variant="outline-light"
              onMouseOver={() => setIsFormHovered(true)}  // Keep form visible when hovering over the button
              onMouseOut={() => setIsFormHovered(false)}   // Hide form when mouse leaves the button
            >
              <i className="bi bi-search "></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
