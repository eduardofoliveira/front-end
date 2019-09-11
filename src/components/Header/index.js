import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import logo from '~/assets/phone-book.png';

import { Container, Content, Profile, NavbarEdit } from './styles';

export default function Header() {
  return (
    <NavbarEdit>
      <img src={logo} alt="as" />
      <Navbar.Brand href="/">Basix Contact</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/chamados">chamados</Link>
        <Nav.Link href="/usuarios">usuarios</Nav.Link>
        <Nav.Link href="/dominios">dominios</Nav.Link>
      </Nav>
      <aside>
        <Profile>
          <div>
            <strong>Eduardo F Oliveira</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Eduardo"
          />
        </Profile>
      </aside>
    </NavbarEdit>
    // <Container>
    //   <Content>
    //     <nav>
    //       <img src={logo} alt="Basix Contact" />
    //       <Link to="/dashboard">DASHBOARD</Link>
    //     </nav>

    //     <aside>
    //       <Profile>
    //         <div>
    //           <strong>Eduardo F Oliveira</strong>
    //           <Link to="/profile">Meu Perfil</Link>
    //         </div>
    //         <img
    //           src="https://api.adorable.io/avatars/50/abott@adorable.png"
    //           alt="Eduardo"
    //         />
    //       </Profile>
    //     </aside>
    //   </Content>
    // </Container>
  );
}
