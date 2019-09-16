/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Select } from '@rocketseat/unform';

import {
  getUserDetailRequest,
  HideFormRequest,
} from '~/store/modules/usuarios/actions';

import { Container } from './styles';

const options = [
  { id: '1', title: 'Comum' },
  { id: '2', title: 'Admin' },
  { id: '3', title: 'Super User' },
];

const optionsLogin = [
  { id: '1', title: 'Ativar' },
  { id: '2', title: 'Desativar' },
];

const optionsGravacao = [
  { id: '1', title: 'Ativar' },
  { id: '2', title: 'Desativar' },
];

export default function Usuarios_Add({ match }) {
  const { id_dominio } = useSelector(state => state.user.profile);
  const { usuario, loading } = useSelector(state => state.usuarios);
  const { id } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetailRequest({ id_dominio, id }));

    return () => {
      dispatch(HideFormRequest());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      {loading ? (
        <div className="carregando">
          <h1>Carregando...</h1>
        </div>
      ) : (
        <Form initialData={usuario} onSubmit={handleSubmit}>
          <label htmlFor="ativo">
            <Input
              type="checkbox"
              name="ativo"
              defaultChecked={usuario.ativo}
            />{' '}
            Ativo
          </label>
          <Input name="nome" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="user_basix" placeholder="Usuário Basix" />

          <hr />

          <Input type="password" name="senha" placeholder="Senha" />

          <hr />

          <label htmlFor="tipo" id="tech-label">
            Tipo de usuário
            <Select
              id="tipo"
              name="tipo"
              options={options}
              placeholder="Selecione uma opção"
            />
          </label>

          <label htmlFor="loginlogout" id="tech-label">
            Login e Logout via Web
            <Select
              id="loginlogout"
              name="loginlogout"
              options={optionsLogin}
              placeholder="Selecione uma opção"
            />
          </label>

          <label htmlFor="gravacao" id="tech-label">
            Buscar gravação da chamada no log
            <Select
              id="gravacao"
              name="gravacao"
              options={optionsGravacao}
              placeholder="Selecione uma opção"
            />
          </label>

          <Input multiline name="descricao" placeholder="descricao..." />

          <hr />

          <label htmlFor="ativo_dendron">
            <Input
              type="checkbox"
              name="ativo_dendron"
              id="ativo_dendron"
              defaultChecked={usuario.ativo_dendron}
            />{' '}
            Ativo Dendron
          </label>

          <Input name="dendron_operador" placeholder="Dendron Operador" />
          <Input name="dendron_token" placeholder="Dendron Token" />

          <hr />

          <label htmlFor="ativo_zendesk">
            <Input
              type="checkbox"
              name="ativo_zendesk"
              id="ativo_zendesk"
              defaultChecked={usuario.ativo_zendesk}
            />{' '}
            Ativo Zendesk
          </label>

          <Input name="email_zendesk" placeholder="Email Zendesk" />
          <Input name="token_zendesk" placeholder="Zendesk Token" />
          <Input name="sub_dominio_zendesk" placeholder="Sub Dominio" />

          <hr />
        </Form>
      )}
    </Container>
  );
}

Usuarios_Add.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
