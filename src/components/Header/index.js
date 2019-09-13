import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaUser, FaSitemap, FaUsers, FaBook } from 'react-icons/fa';
import logo from '~/assets/phone-book.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const currentLocation = window.location.pathname;

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Basix Contact" />
          <ul>
            <li>
              <Link
                to="/dashboard"
                className={currentLocation === '/dashboard' ? 'active' : ''}
              >
                <FaHome size={12} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={currentLocation === '/profile' ? 'active' : ''}
              >
                <FaUser size={10} />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dominios">
                <FaSitemap />
                Dominíos
              </Link>
            </li>
            <li>
              <Link to="/dominios">
                <FaUsers />
                Usuários
              </Link>
            </li>
            <li>
              <Link to="/dominios">
                <FaBook />
                Chamados
              </Link>
            </li>
          </ul>
        </nav>

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
      </Content>
    </Container>
  );
}
