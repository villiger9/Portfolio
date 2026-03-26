import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            &lt;ali shaker /&gt;
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="certificates">
                Certificates
              </Nav.Link>
              <Nav.Link as={NavLink} to="/">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="container mt-4 pt-4">
        <Outlet />
      </main>
      <ScrollToTop />
    </>
  );
}
