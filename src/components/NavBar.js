import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import logo from '../img/logo.jpg';

import moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';

moment.locale('es');


const NavBar = () => {

    const today = moment().format('LL');

    return (
        <>
            <Container >
                
                    <Navbar bg="dark" variant="dark" className="mb-5" expand="lg">
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                                BricoCentro
                        </Navbar.Brand>
                        <Nav className="mr-auto text">
                            <Nav.Link href="/mosquiteras"><Link to="/mosquiteras" className="text">Mosquiteras</Link></Nav.Link>
                            <Nav.Link href="/cortinas"><Link to="/cortinas" className="text">Cortinas de tiras</Link></Nav.Link>
                            <Nav.Link href="/persianas"><Link to="/persianas" className="text">Persianas y Alicantinas</Link></Nav.Link>
                        </Nav>
                        <div className="mx-auto text-warning">
                            {today}
                        </div>
                    </Navbar>
                
            </Container>
        </>
    )
}

export default NavBar;