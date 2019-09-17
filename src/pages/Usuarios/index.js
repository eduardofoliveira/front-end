import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';

import { listUsersRequest } from '~/store/modules/usuarios/actions';

import { Container, Titulo, Table } from './styles';

export default function Usuarios() {
  const profile = useSelector(state => state.user.profile);
  const { usuarios } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsersRequest(profile));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Titulo>Usuários</Titulo>
      <div>
        <button type="button">
          <FaPlus /> Adicionar
        </button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ativo</th>
            <th>Nome</th>
            <th>Usuário Basix</th>
            <th>Ativo Dendron</th>
            <th>Ativo Zendesk</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios.map(usuario => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td className={usuario.ativo ? 'ativo' : 'inativo'}>
                    {usuario.ativo ? 'Sim' : 'Não'}
                  </td>
                  <td>
                    <Link to={`/usuarios/${usuario.id}`}>{usuario.nome}</Link>
                  </td>
                  <td>{usuario.user_basix}</td>
                  <td className={usuario.ativo_dendron ? 'ativo' : 'inativo'}>
                    {usuario.ativo_dendron ? 'Sim' : 'Não'}
                  </td>
                  <td className={usuario.ativo_zendesk ? 'ativo' : 'inativo'}>
                    {usuario.ativo_zendesk ? 'Sim' : 'Não'}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
