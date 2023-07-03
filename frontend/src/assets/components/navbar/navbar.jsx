import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgeth from '../CartWidgeth/CartWidgeth';
import '../../styles/NavBarStyles.css';
function Navbars() {
    const { role } = JSON.parse(localStorage.getItem('usuarios')) || {};
    return (
        <>
            <Navbar className="navbarestilos">
                <Container>
                    <Navbar.Brand href="#home">MClovin</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Inicio</Nav.Link>
                        <Nav.Link href="">Productos</Nav.Link>

                        <Nav.Link href="/">Salir</Nav.Link>
                        {role === 'admin' && <Nav.Link href="/users">Dashboard</Nav.Link>}
                        <CartWidgeth />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbars;