import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';


export default function Nav1() {
  return (
    <Navbar expand="lg" style={{backgroundColor:"#237B71",color:"white"}}>
      <Container>
        <Navbar.Brand href="#" className='fw-bold text-white'>NEWS APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 p-3"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='d-flex'>
            <Nav.Link as={Link} to='/' className='px-3 text-white'>Home</Nav.Link>
            <Nav.Link as={Link} to='/tesla' className='px-3 text-white'>Tesla</Nav.Link>
            <Nav.Link as={Link} to='/apple' className='px-3 text-white'>Apple</Nav.Link>
            <Nav.Link as={Link} to='/techcrunch' className='px-3 text-white'>TechCrunch</Nav.Link>
            </div>
          </Nav>
          <Form className="d-flex">
          <InputGroup className="ms-3">
        <Form.Control
          placeholder="Search News Here..."
        />
        <Button variant='outline-light'>
          <SearchIcon/>
        </Button>
      </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

