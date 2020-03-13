import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Form, Message, Loader } from 'semantic-ui-react';

import api from '~/services/api';

import { updateProfileRequest } from '~/store/modules/user/actions';

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

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const [ativo, setAtivo] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [user_basix, setUserBasix] = useState('');
  const [callCenterGroup, setCallCenterGroup] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState();
  const [loginlogout, setLoginlogout] = useState();
  const [gravacao, setGravacao] = useState();
  const [mostrarHistorico, setMostrarHistorico] = useState();
  const [descricao, setDescricao] = useState('');
  const [ativo_dendron, setAtivoDendron] = useState(false);
  const [dendron_operador, setDendronOperador] = useState('');
  const [dendron_token, setDendronToken] = useState('');
  const [ativo_zendesk, setAtivoZendesk] = useState(false);
  const [email_zendesk, setEmailZendesk] = useState('');
  const [token_zendesk, setTokenZendesk] = useState('');
  const [sub_dominio_zendesk, setSubDominioZendesk] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const executar = async () => {
      const response = await api.get(
        `/users/${profile.id_dominio}/${profile.id}`
      );
      setAtivo(response.data.ativo === 1);
      setNome(response.data.nome);
      setEmail(response.data.email);
      setUserBasix(response.data.user_basix);
      setCallCenterGroup(response.data.callcenter_group);
      setTipo(response.data.tipo);
      setLoginlogout(response.data.loginlogout);
      setGravacao(response.data.gravacao);
      setMostrarHistorico(response.data.historico);
      setDescricao(response.data.descricao);
      setAtivoDendron(response.data.ativo_dendron === 1);
      setDendronOperador(response.data.dendron_operador);
      setDendronToken(response.data.dendron_token);
      setAtivoZendesk(response.data.ativo_zendesk === 1);
      setEmailZendesk(response.data.email_zendesk);
      setTokenZendesk(response.data.token_zendesk);
      setSubDominioZendesk(response.data.sub_dominio_zendesk);
      setLoading(false);
    };
    executar();
  }, [profile.id, profile.id_dominio]);

  function handleSubmit(data) {
    data = {
      id: profile.id,
      id_dominio: profile.id_dominio,
      ativo,
      nome,
      email,
      user_basix,
      callcenter_group: callCenterGroup,
      senha,
      tipo,
      loginlogout,
      gravacao,
      historico: mostrarHistorico,
      descricao,
      ativo_dendron,
      dendron_operador,
      dendron_token,
      ativo_zendesk,
      email_zendesk,
      token_zendesk,
      sub_dominio_zendesk,
    };

    dispatch(updateProfileRequest(data));
  }

  return (
    <FormContainer>
      {!loading ? (
        <Form loading={loading} onSubmit={handleSubmit}>
          <Message>
            <Form.Field>
              <Checkbox
                name="ativo"
                label="Ativo"
                defaultChecked={ativo}
                onChange={() => setAtivo(!ativo)}
              />
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Input
                name="nome"
                fluid
                label="Nome"
                placeholder="Nome do usuário"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <Form.Input
                name="email"
                fluid
                label="E-mail"
                placeholder="E-mail usado para login"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Input
                name="user_basix"
                fluid
                label="Usuário Basix"
                placeholder="Usuário do PBX Basix"
                value={user_basix}
                onChange={e => setUserBasix(e.target.value)}
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
              />
              <Form.Input
                name="callcenter_group"
                fluid
                label="callcenter_group"
                placeholder="Grupo CallCenter para buscar pausas"
                type="text"
                value={callCenterGroup}
                onChange={e => setCallCenterGroup(e.target.value)}
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
              />

              <Form.Select
                fluid
                name="loginlogout"
                label="Login e Logout via Web"
                options={optionsLogin}
                placeholder="Selecione uma opção"
                value={loginlogout}
                onChange={(e, v) => setLoginlogout(v.value)}
              />

              <Form.Select
                fluid
                name="gravacao"
                label="Buscar gravação da chamada no log"
                options={optionsGravacao}
                placeholder="Selecione uma opção"
                value={gravacao}
                onChange={(e, v) => setGravacao(v.value)}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Select
                fluid
                name="historico"
                label="Mostrar historico do chamado"
                options={optionsGravacao}
                placeholder="Selecione uma opção"
                value={mostrarHistorico}
                onChange={(e, v) => setMostrarHistorico(v.value)}
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
    </FormContainer>
  );
}
