/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Message, Form, Button, Checkbox, Loader } from 'semantic-ui-react';
import * as Yup from 'yup';

import {
  getUserDetailRequest,
  HideFormRequest,
  userUpdateRequest,
  deleteUserRequest,
} from '~/store/modules/usuarios/actions';

import { EditContainer } from './styles';

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

export default function Usuarios_Add({ match }) {
  const { id_dominio } = useSelector(state => state.user.profile);
  const { usuario, loading } = useSelector(state => state.usuarios);
  const { id } = match.params;
  const dispatch = useDispatch();

  const [ativo, setAtivo] = useState(false);
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
  const [show, setShow] = useState(false);

  const [errorNome, setErrorNome] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUserBasix, setErrorUserBasix] = useState(false);
  const [errorSenha, setErrorSenha] = useState(false);
  const [errorTipo, setErrorTipo] = useState(false);
  const [errorLoginLogout, setErrorLoginLogout] = useState(false);
  const [errorGravacao, setErrorGravacao] = useState(false);

  useEffect(() => {
    setAtivo(usuario.ativo === 1);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setUserBasix(usuario.user_basix);
    setTipo(usuario.tipo);
    setLoginlogout(usuario.loginlogout);
    setGravacao(usuario.gravacao);
    setDescricao(usuario.descricao);
    setAtivoDendron(usuario.ativo_dendron === 1);
    setDendronOperador(usuario.dendron_operador);
    setDendronToken(usuario.dendron_token);
    setAtivoZendesk(usuario.ativo_zendesk === 1);
    setEmailZendesk(usuario.email_zendesk);
    setTokenZendesk(usuario.token_zendesk);
    setSubDominioZendesk(usuario.sub_dominio_zendesk);

    setTimeout(() => {
      setShow(true);
    }, 500);
  }, [usuario]);

  useEffect(() => {
    dispatch(getUserDetailRequest({ id_dominio, id }));

    return () => {
      dispatch(HideFormRequest());
      setShow(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete() {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `Apagar usuário ${usuario.nome}`,
      text: 'Tem certeza que deseja deletar ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.value) {
        dispatch(deleteUserRequest({ id, id_dominio }));
        // return MySwal.fire(<p>Deletando... {usuario.nome}</p>);
      }
      return false;
    });
  }

  async function handleSubmit() {
    const user = {
      ativo,
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

      dispatch(userUpdateRequest({ user, id, id_dominio }));
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
    }
  }

  return (
    <EditContainer>
      {!loading && show ? (
        <Form onSubmit={handleSubmit}>
          <Message>
            <div className="header">
              <Checkbox
                className="check-integracao"
                name="ativo"
                label="Usuário Ativo"
                defaultChecked={ativo}
                onChange={() => setAtivo(!ativo)}
              />

              <Button
                type="button"
                onClick={() => handleDelete()}
                size="mini"
                color="red"
              >
                Deletar
              </Button>
            </div>

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
              Alterar
            </Button>
          </Message>
        </Form>
      ) : (
        <Loader active />
      )}
    </EditContainer>
  );

  // return (
  //   <Container>
  //     <Titulo>Dados do usuário</Titulo>
  //     <div>
  //       <Link to="/usuarios">
  //         <FaBackward /> Voltar
  //       </Link>

  //       <button type="button" onClick={handleDelete}>
  //         <FaTimes /> Deletar
  //       </button>
  //     </div>
  //     {loading ? (
  //       <div className="carregando">
  //         <h1>Carregando...</h1>
  //       </div>
  //     ) : (
  //       <Form initialData={usuario} onSubmit={handleSubmit}>
  //         <label htmlFor="ativo">
  //           <Input
  //             type="checkbox"
  //             name="ativo"
  //             id="ativo"
  //             defaultChecked={usuario.ativo}
  //           />{' '}
  //           Ativo
  //         </label>
  //         <Input name="nome" placeholder="Nome" />
  //         <Input name="email" placeholder="E-mail" />
  //         <Input name="user_basix" placeholder="Usuário Basix" />

  //         <hr />

  //         <Input type="password" name="senha" placeholder="Senha" />

  //         <hr />

  //         <label htmlFor="tipo" id="tech-label">
  //           Tipo de usuário
  //           <Select
  //             id="tipo"
  //             name="tipo"
  //             options={options}
  //             placeholder="Selecione uma opção"
  //           />
  //         </label>

  //         <label htmlFor="loginlogout" id="tech-label">
  //           Login e Logout via Web
  //           <Select
  //             id="loginlogout"
  //             name="loginlogout"
  //             options={optionsLogin}
  //             placeholder="Selecione uma opção"
  //           />
  //         </label>

  //         <label htmlFor="gravacao" id="tech-label">
  //           Buscar gravação da chamada no log
  //           <Select
  //             id="gravacao"
  //             name="gravacao"
  //             options={optionsGravacao}
  //             placeholder="Selecione uma opção"
  //           />
  //         </label>

  //         <Input multiline name="descricao" placeholder="descricao..." />

  //         <hr />

  //         <label htmlFor="ativo_dendron">
  //           <Input
  //             type="checkbox"
  //             name="ativo_dendron"
  //             id="ativo_dendron"
  //             defaultChecked={usuario.ativo_dendron}
  //           />{' '}
  //           Ativo Dendron
  //         </label>

  //         <Input name="dendron_operador" placeholder="Dendron Operador" />
  //         <Input name="dendron_token" placeholder="Dendron Token" />

  //         <hr />

  //         <label htmlFor="ativo_zendesk">
  //           <Input
  //             type="checkbox"
  //             name="ativo_zendesk"
  //             id="ativo_zendesk"
  //             defaultChecked={usuario.ativo_zendesk}
  //           />{' '}
  //           Ativo Zendesk
  //         </label>

  //         <Input name="email_zendesk" placeholder="Email Zendesk" />
  //         <Input name="token_zendesk" placeholder="Zendesk Token" />
  //         <Input name="sub_dominio_zendesk" placeholder="Sub Dominio" />

  //         <hr />

  //         <button type="submit">
  //           <FaSave /> Atualizar Usuário
  //         </button>
  //       </Form>
  //     )}
  //   </Container>
  // );
}

Usuarios_Add.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
