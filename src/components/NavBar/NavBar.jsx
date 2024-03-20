import style from './NavBar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return (
        <div className={style.container}>
            
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Brand href="#skills">Skills</Navbar.Brand>
                    <Navbar.Brand href="#projects">Projects</Navbar.Brand>                                  
                </Container>
            </Navbar>            
        </div>
    )
}