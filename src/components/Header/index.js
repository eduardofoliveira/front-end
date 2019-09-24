import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaHome, FaSitemap, FaUsers, FaBook, FaThList } from 'react-icons/fa';
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
              <Link
                to="/chamados"
                className={
                  currentLocation.indexOf('/chamado') === 0 ? 'active' : ''
                }
              >
                <FaBook />
                Chamados
              </Link>
            </li>
            <li>
              <Link
                to="/contatos"
                className={
                  currentLocation.indexOf('/contato') === 0 ? 'active' : ''
                }
              >
                <FaThList />
                Contatos
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
              src="https://www.supinfo.com/articles/resources/204368/6265/0.png"
              alt={profile.nome}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
