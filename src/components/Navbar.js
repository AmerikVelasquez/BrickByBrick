import react from 'react';
import { Navbar, Nav} from 'react-bootstrap';

const Brick = () => {
  return (
    <>
    <Navbar bg="warning" variant="light">
    <Navbar.Brand>Brick By Brick</Navbar.Brand> 
    {/* <Nav >
      <Nav.Link href="/dashboard">Profile</Nav.Link>
    </Nav> */}
    <Nav>
    <Nav.Link href ="www.lego.com/en-us">Lego</Nav.Link>
    </Nav>
  </Navbar>
  </>
  )
}
//fix where the link goes to
export default Brick;