import { Container, Navbar, Nav, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";
import CartWidget from "../Cart/CartWidget";

const NavBar = ({ storeInfo }) => {
  const { storeName, categories } = storeInfo;

  return (
    <header>
      <Navbar sticky="top" expand="md" className="my-navbar">
        <Container>
          <Col xs={3} className="justify-content-center">
            <div className="myLogoImg"></div>
            {"  "}
            <NavLink
              to={"/"}
              className="navbar-brand my-logo"
              activeClassName="my-selected-link"
            >
              {storeName}
            </NavLink>
          </Col>
          <Col xs="auto">
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ justifyContent: "right" }}
            >
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "300px" }}
                navbarScroll
              >
                {categories.map((item, idx) => (
                  <NavLink
                    role="button"
                    className="my-nav-link"
                    activeClassName="my-selected-link"
                    to={item.link}
                    key={idx}
                  >
                    {item.title}
                  </NavLink>
                ))}
                <CartWidget />
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
