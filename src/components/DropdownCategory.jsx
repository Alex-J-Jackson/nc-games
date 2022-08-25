import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const DropdownCategory = ({ slug }) => {
  return (
    <LinkContainer to={`/categories/${slug}`}>
      <NavDropdown.Item>{slug}</NavDropdown.Item>
    </LinkContainer>
  );
};

export default DropdownCategory;
