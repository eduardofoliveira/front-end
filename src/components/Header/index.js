import React, { useEffect } from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FaHome,
  FaSitemap,
  FaUsers,
  FaBook,
  FaThList,
  FaUserCog,
} from 'react-icons/fa';
import logo from '~/assets/phone-book.png';
import history from '~/services/history';

import { MenuContainer } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import {
  loginRequest,
  logoutRequest,
  sairPausaRequest,
  getBreaksRequest,
  entrarPausaRequest,
} from '~/store/modules/callcenter/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const callcenter = useSelector(state => state.callcenter);
  const currentLocation = window.location.pathname;

  useEffect(() => {
    dispatch(
      getBreaksRequest({
        domain: profile.dominio,
        group: profile.callcenter_group,
      })
    );
  }, [dispatch, profile.callcenter_group, profile.dominio]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <MenuContainer>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt="Logo Contact" />
        </Menu.Item>

        <Menu.Item
          name="Dashboard"
          active={currentLocation === '/dashboard'}
          onClick={() => history.push('/dashboard')}
        >
          <FaHome size={12} />
          Dashboard
        </Menu.Item>

        {profile.tipo === 3 && (
          <Menu.Item
            name="Dominíos"
            active={currentLocation === '/dominios'}
            onClick={() => history.push('/dominios')}
          >
            <FaSitemap />
            Dominíos
          </Menu.Item>
        )}

        <Menu.Item
          name="Usuários"
          active={currentLocation.indexOf('/usuarios') === 0}
          onClick={() => history.push('/usuarios')}
        >
          <FaUsers />
          Usuários
        </Menu.Item>

        <Menu.Item
          name="Chamados"
          active={currentLocation.indexOf('/chamado') === 0}
          onClick={() => history.push('/chamados')}
        >
          <FaBook />
          Chamados
        </Menu.Item>

        <Menu.Item
          name="Contatos"
          active={currentLocation.indexOf('/contato') === 0}
          onClick={() => history.push('/contatos')}
        >
          <FaThList />
          Contatos
        </Menu.Item>

        {profile.loginlogout === 1 && (
          <Dropdown
            text="CallCenter"
            icon="call square"
            labeled
            // className="link item left_icon"
            className={
              callcenter.login
                ? 'link item left_icon green_color'
                : 'link item left_icon red_color'
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item
                icon="sign-in"
                className="green_color"
                text="Logar"
                onClick={() => {
                  dispatch(
                    loginRequest({
                      user: profile.user_basix,
                      domain: profile.dominio,
                    })
                  );
                }}
              />
              <Dropdown.Item
                icon="sign-out"
                className="red_color"
                text="Deslogar"
                onClick={() => {
                  dispatch(
                    logoutRequest({
                      user: profile.user_basix,
                      domain: profile.dominio,
                    })
                  );
                }}
              />
              <Dropdown.Divider />
              <Dropdown.Header>Pausas</Dropdown.Header>
              <Dropdown.Item>
                <Dropdown
                  icon="phone"
                  className="red_color left_icon"
                  text="Entrar"
                >
                  <Dropdown.Menu>
                    {callcenter.breaks &&
                      callcenter.breaks.map(item => {
                        return (
                          <Dropdown.Item
                            key={item.codigo}
                            onClick={() => {
                              dispatch(
                                entrarPausaRequest({
                                  user: profile.user_basix,
                                  domain: profile.dominio,
                                  cod: item.codigo,
                                })
                              );
                            }}
                          >
                            {item.nome}
                          </Dropdown.Item>
                        );
                      })}
                    {/* <Dropdown.Item>Almoço</Dropdown.Item>
                    <Dropdown.Item>Visita à Cliente</Dropdown.Item>
                    <Dropdown.Item>Intervalo</Dropdown.Item>
                    <Dropdown.Item>Voice</Dropdown.Item>
                    <Dropdown.Item>Outras Atividades</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Item>
              <Dropdown.Item
                icon="phone"
                className="green_color"
                text="Sair da pausa"
                onClick={() => {
                  dispatch(
                    sairPausaRequest({
                      user: profile.user_basix,
                      domain: profile.dominio,
                    })
                  );
                }}
              />
            </Dropdown.Menu>
          </Dropdown>
        )}

        <Menu.Menu position="right">
          {/* <Menu.Item>
            <Button.Group size="mini">
              <Button color="olive">Logar</Button>
              <Button.Or />
              <Button color="black">Deslogar</Button>
            </Button.Group>
          </Menu.Item> */}

          <Menu.Item
            name="Contatos"
            active={currentLocation.indexOf('/profile') === 0}
            onClick={() => history.push('/profile')}
          >
            <FaUserCog />
            {profile.nome}
          </Menu.Item>
          <Menu.Item>
            <Button color="red" onClick={() => handleSignOut()}>
              Logout
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </MenuContainer>
  );
}
