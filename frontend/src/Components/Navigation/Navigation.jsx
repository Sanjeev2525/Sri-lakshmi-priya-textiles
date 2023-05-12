
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { MenuItem } from '@mui/material';
import { Link} from 'react-router-dom';

const Navigation = ()=> {
    return (<>
        <Navbar bg="dark" expand="md" collapseOnSelect ='top' variant='dark'>
            <Container>
                <Navbar.Brand href="/">
                    Sri Lakshmi Priya textiles
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Link to="/" style={{ textDecoration: 'none' }}><MenuItem style={{paddingLeft: 13}}>
                        <Nav.Link href="/">Home</Nav.Link>
                        </MenuItem>
                        </Link>

                        <Link to="/products" style={{ textDecoration: 'none' }}><MenuItem style={{paddingLeft: 13}}>
                        <Nav.Link href="/products">Collections</Nav.Link>
                        </MenuItem>
                        </Link>
                        
                        <Link to="/about" style={{ textDecoration: 'none' }}><MenuItem style={{paddingLeft: 13}}>
                        <Nav.Link href="about">About</Nav.Link>
                        </MenuItem>
                        </Link>

                        <Link to="/admin" style={{ textDecoration: 'none' }}><MenuItem style={{paddingLeft: 13}}>
                        <Nav.Link href="about">Admin</Nav.Link>
                        </MenuItem>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
        </>
    );
}

export default Navigation;