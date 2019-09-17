import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaHome, FaSitemap, FaUsers, FaBook } from 'react-icons/fa';
import logo from '~/assets/phone-book.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
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
            {profile.tipo === 3 && (
              <li>
                <Link to="/dominios">
                  <FaSitemap />
                  Dominíos
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/usuarios"
                className={
                  currentLocation.indexOf('/usuarios') === 0 ? 'active' : ''
                }
              >
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
              <strong>{profile.nome}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.nome}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
