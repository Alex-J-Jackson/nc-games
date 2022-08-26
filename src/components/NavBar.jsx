import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { fetchCategories } from "../api";
import { UserContext } from "../contexts/User";
import DropdownCategory from "./DropdownCategory";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>NC Games</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <LinkContainer to="/categories">
                <NavDropdown.Item>All categories</NavDropdown.Item>
              </LinkContainer>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                categories.map(({ slug }) => (
                  <DropdownCategory key={slug} slug={slug} />
                ))
              )}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
            </NavDropdown>
            <LinkContainer to="/post-review">
              <Nav.Link>New Review</Nav.Link>
            </LinkContainer>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link>{user}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
