import { NavLink, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  // Helper function to wrap text in brackets if active
  const formatLink = ({ isActive }, text) => (isActive ? `< ${text} >` : text);

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            &lt;ali shaker /&gt;
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} to="/" end>
                {({ isActive }) => formatLink({ isActive }, 'Home')}
              </Nav.Link>

              <Nav.Link as={NavLink} to="/certificates">
                {({ isActive }) => formatLink({ isActive }, 'Certificates')}
              </Nav.Link>

              {/* <Nav.Link as={NavLink} to="/projects">
                {({ isActive }) => formatLink({ isActive }, 'Projects')}
              </Nav.Link> */}

              <Nav.Link as={NavLink} to="/contact">
                {({ isActive }) => formatLink({ isActive }, 'Contact')}
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
