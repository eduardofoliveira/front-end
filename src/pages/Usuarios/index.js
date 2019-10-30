import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Icon, Button } from 'semantic-ui-react';

import { listUsersRequest } from '~/store/modules/usuarios/actions';

import { ListContainer } from './styles';

export default function Usuarios() {
  const profile = useSelector(state => state.user.profile);
  const { usuarios } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsersRequest(profile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListContainer>
      <Table celled color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="7">
              <Link to="/usuarios/add">
                <Button icon labelPosition="left" primary size="small">
                  <Icon name="user" /> Add User
                </Button>
              </Link>
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row textAlign="center">
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Ativo</Table.HeaderCell>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Usuário</Table.HeaderCell>
            <Table.HeaderCell>Ativo Dendron</Table.HeaderCell>
            <Table.HeaderCell>Ativo Zendesk</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {usuarios &&
            usuarios.map(usuario => {
              return (
                <Table.Row key={usuario.id} className="btn-actions">
                  <Table.Cell textAlign="center">{usuario.id}</Table.Cell>
                  <Table.Cell
                    positive={usuario.ativo === 1}
                    negative={!usuario.ativo}
                    textAlign="center"
                  >
                    {!usuario.ativo && <Icon name="close" />}
                    {!!usuario.ativo && <Icon name="checkmark" />}
                    {usuario.ativo ? 'Ativo' : 'Inativo'}
                  </Table.Cell>
                  <Table.Cell textAlign="center">{usuario.nome}</Table.Cell>
                  <Table.Cell textAlign="center">
                    {usuario.user_basix}
                  </Table.Cell>
                  <Table.Cell
                    positive={usuario.ativo_dendron === 1}
                    negative={!usuario.ativo_dendron}
                    textAlign="center"
                  >
                    {!usuario.ativo_dendron && <Icon name="close" />}
                    {!!usuario.ativo_dendron && <Icon name="checkmark" />}
                    {usuario.ativo_dendron ? 'Ativo' : 'Inativo'}
                  </Table.Cell>
                  <Table.Cell
                    positive={usuario.ativo_zendesk === 1}
                    negative={!usuario.ativo_zendesk}
                    textAlign="center"
                  >
                    {!usuario.ativo_zendesk && <Icon name="close" />}
                    {!!usuario.ativo_zendesk && <Icon name="checkmark" />}
                    {usuario.ativo_zendesk ? 'Ativo' : 'Inativo'}
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Link to={`/usuarios/${usuario.id}`}>
                      <Button size="mini" color="yellow">
                        <Icon name="edit" /> Editar
                      </Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </ListContainer>
  );
}
