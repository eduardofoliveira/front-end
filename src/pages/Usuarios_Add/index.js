/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, Select } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaBackward, FaSave } from 'react-icons/fa';
import * as Yup from 'yup';

import { addUserRequest } from '~/store/modules/usuarios/actions';
import { Container, Titulo } from './styles';

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

const schema = Yup.object().shape({
  nome: Yup.string().required('Nome é Obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  user_basix: Yup.string().required('Usuário do Basix é Obrigatório'),
  senha: Yup.string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
  tipo: Yup.string().required('Selecione um tipo de usuário'),
  loginlogout: Yup.string().required('Selecione uma opção'),
  gravacao: Yup.string().required('Selecione uma opção'),
});

export default function Usuarios_Add() {
  const { id_dominio } = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    const refAtivoDendron = document.getElementById('ativo_dendron');
    const refAtivoZendesk = document.getElementById('ativo_zendesk');

    const user = Object.assign(data, {
      [refAtivoDendron.name]: refAtivoDendron.checked ? 1 : 0,
      [refAtivoZendesk.name]: refAtivoZendesk.checked ? 1 : 0,
    });

    dispatch(addUserRequest({ user, id_dominio }));
  }

  return (
    <Container>
      <Titulo>Dados do usuário</Titulo>

      <div>
        <Link to="/usuarios">
          <FaBackward /> Voltar
        </Link>
      </div>

      <Form schema={schema} onSubmit={handleSubmit}>
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
          <Input type="checkbox" name="ativo_dendron" id="ativo_dendron" />{' '}
          Ativo Dendron
        </label>

        <Input name="dendron_operador" placeholder="Dendron Operador" />
        <Input name="dendron_token" placeholder="Dendron Token" />

        <hr />

        <label htmlFor="ativo_zendesk">
          <Input type="checkbox" name="ativo_zendesk" id="ativo_zendesk" />{' '}
          Ativo Zendesk
        </label>

        <Input name="email_zendesk" placeholder="Email Zendesk" />
        <Input name="token_zendesk" placeholder="Zendesk Token" />
        <Input name="sub_dominio_zendesk" placeholder="Sub Dominio" />

        <hr />

        <button type="submit">
          <FaSave /> Adicionar Usuário
        </button>
      </Form>
    </Container>
  );
}
