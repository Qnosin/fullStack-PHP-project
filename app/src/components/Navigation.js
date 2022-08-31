import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <div className='container-center'>
                    <Navbar.Brand><Link to='/'>Crud React and PHP App</Link></Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href='/create'> <Link to='/create'>Create chanel</Link></Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>)
}
export default Navigation