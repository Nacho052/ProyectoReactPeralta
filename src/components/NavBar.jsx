import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";


export const NavBar = () => 
<>
    <Navbar>
        <Container>
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
                Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="category/Camisetas">
                Camisetas
            </Nav.Link>
            <Nav.Link as={NavLink} to="category/Buzos">
            Buzos
            </Nav.Link>
            <Nav.Link as={NavLink} to="category/Pantalones">
            Pantalones
            </Nav.Link>
        </Nav>
        <CartWidget />
        </Container>
    </Navbar>
    
</>