/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

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

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [ativo, setAtivo] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [user_basix, setUserBasix] = useState('');
  const [tipo, setTipo] = useState();
  const [loginlogout, setLoginlogout] = useState();
  const [gravacao, setGravacao] = useState();
  const [descricao, setDescricao] = useState('');
  const [ativo_dendron, setAtivoDendron] = useState(false);
  const [dendron_operador, setDendronOperador] = useState('');
  const [dendron_token, setDendronToken] = useState('');
  const [ativo_zendesk, setAtivoZendesk] = useState(false);
  const [email_zendesk, setEmailZendesk] = useState('');
  const [token_zendesk, setTokenZendesk] = useState('');
  const [sub_dominio_zendesk, setSubDominioZendesk] = useState('');

  useEffect(() => {
    const executar = async () => {
      const response = await api.get(`/users/1/${profile.id}`);
      setAtivo(response.data.ativo);
      setNome(response.data.nome);
      setEmail(response.data.email);
      setUserBasix(response.data.user_basix);
      setTipo(response.data.tipo);
      setLoginlogout(response.data.loginlogout);
      setGravacao(response.data.gravacao);
      setDescricao(response.data.descricao);
      setAtivoDendron(response.data.ativo_dendron);
      setDendronOperador(response.data.dendron_operador);
      setDendronToken(response.data.dendron_token);
      setAtivoZendesk(response.data.ativo_zendesk);
      setEmailZendesk(response.data.email_zendesk);
      setTokenZendesk(response.data.token_zendesk);
      setSubDominioZendesk(response.data.sub_dominio_zendesk);
    };
    executar();
  }, [profile.id]);

  function handleSubmit(data) {
    data = {
      ...data,
      ativo,
      ativo_dendron,
      ativo_zendesk,
      descricao,
    };

    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="ativo">
          <input
            type="checkbox"
            checked={ativo}
            onChange={e => setAtivo(e.target.checked)}
            name="ativo"
          />{' '}
          Ativo
        </label>

        <Input
          name="nome"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Input
          name="email"
          placeholder="Seu endereço de e-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="user_basix"
          placeholder="Usuário do PBX"
          value={user_basix}
          onChange={e => setUserBasix(e.target.value)}
        />
        <hr />
        <Input type="password" name="senha" placeholder="Senha" />

        <hr />
        <label htmlFor="tipo" id="tech-label">
          Tipo de usuário
          <Select
            id="tipo"
            name="tipo"
            options={options}
            value={tipo}
            onChange={e => setTipo(e.target.value)}
            placeholder="Selecione uma opção"
          />
        </label>

        <label htmlFor="loginlogout" id="tech-label">
          Login e Logout via Web
          <Select
            id="loginlogout"
            name="loginlogout"
            options={optionsLogin}
            value={loginlogout}
            onChange={e => setLoginlogout(e.target.value)}
            placeholder="Selecione uma opção"
          />
        </label>

        <label htmlFor="gravacao" id="tech-label">
          Buscar gravação da chamada no log
          <Select
            id="gravacao"
            name="gravacao"
            options={optionsGravacao}
            value={gravacao}
            onChange={e => setGravacao(e.target.value)}
            placeholder="Selecione uma opção"
          />
        </label>

        <textarea
          name="descricao"
          placeholder="descricao..."
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <hr />

        <label htmlFor="ativo_dendron">
          <input
            type="checkbox"
            name="ativo_dendron"
            id="ativo_dendron"
            checked={ativo_dendron}
            onChange={e => setAtivoDendron(e.target.checked)}
          />{' '}
          Ativo Dendron
        </label>
        <Input
          name="dendron_operador"
          placeholder="Dendron Operador"
          value={dendron_operador}
          onChange={e => setDendronOperador(e.target.value)}
        />
        <Input
          name="dendron_token"
          placeholder="Dendron Token"
          value={dendron_token}
          onChange={e => setDendronToken(e.target.value)}
        />
        <hr />

        <label htmlFor="ativo_zendesk">
          <input
            type="checkbox"
            name="ativo_zendesk"
            id="ativo_zendesk"
            checked={ativo_zendesk}
            onChange={e => setAtivoZendesk(e.target.checked)}
          />{' '}
          Ativo Zendesk
        </label>
        <Input
          name="email_zendesk"
          placeholder="Email Zendesk"
          value={email_zendesk}
          onChange={e => setEmailZendesk(e.target.value)}
        />
        <Input
          name="token_zendesk"
          placeholder="Zendesk Token"
          value={token_zendesk}
          onChange={e => setTokenZendesk(e.target.value)}
        />
        <Input
          name="sub_dominio_zendesk"
          placeholder="Sub Dominio"
          value={sub_dominio_zendesk}
          onChange={e => setSubDominioZendesk(e.target.value)}
        />
        <hr />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        Sair do Basix Contact
      </button>
    </Container>
  );
}
