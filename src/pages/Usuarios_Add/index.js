/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';

import { addUserRequest } from '~/store/modules/usuarios/actions';
import { FormContainer } from './styles';

const options = [
  { key: 1, value: 1, text: 'Comum' },
  { key: 2, value: 2, text: 'Admin' },
  { key: 3, value: 3, text: 'Super User' },
];

const optionsLogin = [
  { key: 1, value: 1, text: 'Ativar' },
  { key: 2, value: 2, text: 'Desativar' },
];

const optionsGravacao = [
  { key: 1, value: 1, text: 'Ativar' },
  { key: 2, value: 2, text: 'Desativar' },
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
  descricao: Yup.string(),
  dendron_operador: Yup.string(),
  dendron_token: Yup.string(),
  email_zendesk: Yup.string(),
  token_zendesk: Yup.string(),
  sub_dominio_zendesk: Yup.string(),
});

export default function Usuarios_Add() {
  const dispatch = useDispatch();
  const { id_dominio } = useSelector(state => state.user.profile);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [user_basix, setUserBasix] = useState('');
  const [senha, setSenha] = useState('');
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

  const [errorNome, setErrorNome] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUserBasix, setErrorUserBasix] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorTipo, setErrorTipo] = useState(false);
  const [errorLoginLogout, setErrorLoginLogout] = useState(false);
  const [errorGravacao, setErrorGravacao] = useState(false);

  async function handleSubmit() {
    const user = {
      nome,
      email,
      user_basix,
      senha,
      tipo,
      loginlogout,
      gravacao,
      descricao,
      ativo_dendron,
      dendron_operador,
      dendron_token,
      ativo_zendesk,
      email_zendesk,
      token_zendesk,
      sub_dominio_zendesk,
    };

    try {
      setErrorNome(false);
      setErrorEmail(false);
      setErrorUserBasix(false);
      setErrorSenha(false);
      setErrorTipo(false);
      setErrorLoginLogout(false);
      setErrorGravacao(false);

      await schema.validate(user, { abortEarly: false });

      dispatch(addUserRequest({ user, id_dominio }));
    } catch (error) {
      error.inner.map(item => {
        if (item.path === 'nome') {
          setErrorNome(item.message);
        }

        if (item.path === 'email') {
          setErrorEmail(item.message);
        }

        if (item.path === 'user_basix') {
          setErrorUserBasix(item.message);
        }

        if (item.path === 'senha') {
          setErrorSenha(item.message);
        }

        if (item.path === 'tipo') {
          setErrorTipo(item.message);
        }

        if (item.path === 'loginlogout') {
          setErrorLoginLogout(item.message);
        }

        if (item.path === 'gravacao') {
          setErrorGravacao(item.message);
        }

        return item;
      });

      // const listaDeErros = error.inner.reduce((lista, item) => {
      //   const itemError = {
      //     field: item.path,
      //     message: item.message,
      //   };

      //   lista.push(itemError);
      //   return lista;
      // }, []);

      // setErros(listaDeErros);
    }

    // console.log(inner);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Message>
          <Form.Group widths="equal">
            <Form.Input
              name="nome"
              fluid
              label="Nome"
              placeholder="Nome do usuário"
              value={nome}
              onChange={e => setNome(e.target.value)}
              error={
                errorNome
                  ? {
                      content: errorNome,
                      pointing: 'below',
                    }
                  : false
              }
            />
            <Form.Input
              name="email"
              fluid
              label="E-mail"
              placeholder="E-mail usado para login"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={
                errorEmail
                  ? {
                      content: errorEmail,
                      pointing: 'below',
                    }
                  : false
              }
            />
            <Form.Input
              name="user_basix"
              fluid
              label="Usuário Basix"
              placeholder="Usuário do PBX Basix"
              value={user_basix}
              onChange={e => setUserBasix(e.target.value)}
              error={
                errorUserBasix
                  ? {
                      content: errorUserBasix,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Input
              name="senha"
              fluid
              label="Senha"
              placeholder="Senha para efetuar login"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              error={
                errorSenha
                  ? {
                      content: errorSenha,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Select
              fluid
              name="tipo"
              label="Tipo de usuário"
              options={options}
              placeholder="Selecione uma opção"
              value={tipo}
              onChange={(e, v) => setTipo(v.value)}
              error={
                errorTipo
                  ? {
                      content: errorTipo,
                      pointing: 'below',
                    }
                  : false
              }
            />

            <Form.Select
              fluid
              name="loginlogout"
              label="Login e Logout via Web"
              options={optionsLogin}
              placeholder="Selecione uma opção"
              value={loginlogout}
              onChange={(e, v) => setLoginlogout(v.value)}
              error={
                errorLoginLogout
                  ? {
                      content: errorLoginLogout,
                      pointing: 'below',
                    }
                  : false
              }
            />

            <Form.Select
              fluid
              name="gravacao"
              label="Buscar gravação da chamada no log"
              options={optionsGravacao}
              placeholder="Selecione uma opção"
              value={gravacao}
              onChange={(e, v) => setGravacao(v.value)}
              error={
                errorGravacao
                  ? {
                      content: errorGravacao,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Group>

          <Form.TextArea
            name="descricao"
            label="Detalhes adicionais"
            placeholder="descrição..."
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />

          <Message color="green">
            <Checkbox
              className="check-integracao"
              name="ativo_dendron"
              label="Integração com a Dendron"
              defaultChecked={ativo_dendron}
              onChange={() => setAtivoDendron(!ativo_dendron)}
            />
            <Form.Group widths="equal">
              <Form.Input
                name="dendron_operador"
                fluid
                label="Operador Dendron"
                placeholder="Senha para efetuar login"
                type="text"
                value={dendron_operador}
                onChange={e => setDendronOperador(e.target.value)}
              />

              <Form.Input
                name="dendron_token"
                fluid
                label="Token Dendron"
                placeholder="Senha para efetuar login"
                type="text"
                value={dendron_token}
                onChange={e => setDendronToken(e.target.value)}
              />
            </Form.Group>
          </Message>

          <Message color="green">
            <Checkbox
              name="ativo_zendesk"
              className="check-integracao"
              label="Integração com a Zendesk"
              defaultChecked={ativo_zendesk}
              onChange={() => setAtivoZendesk(!ativo_zendesk)}
            />
            <Form.Group widths="equal">
              <Form.Input
                name="email_zendesk"
                fluid
                label="Email Zendesk"
                placeholder="Senha para efetuar login"
                type="text"
                value={email_zendesk}
                onChange={e => setEmailZendesk(e.target.value)}
              />

              <Form.Input
                name="token_zendesk"
                fluid
                label="Zendesk Token"
                placeholder="Senha para efetuar login"
                type="text"
                value={token_zendesk}
                onChange={e => setTokenZendesk(e.target.value)}
              />

              <Form.Input
                name="sub_dominio_zendesk"
                fluid
                label="Sub Dominio"
                placeholder="Senha para efetuar login"
                type="text"
                value={sub_dominio_zendesk}
                onChange={e => setSubDominioZendesk(e.target.value)}
              />
            </Form.Group>
          </Message>

          <Button primary fluid type="submit">
            Adicionar
          </Button>
        </Message>
      </Form>
    </FormContainer>
  );
}
