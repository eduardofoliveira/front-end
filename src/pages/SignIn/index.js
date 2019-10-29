import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Button, Form, Image, Header, Message } from 'semantic-ui-react';
import { LoginContainer } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),
  senha: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [erroEmail, setErroEmail] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState('');

  const [erroSenha, setErroSenha] = useState(false);
  const [errorMsgSenha, setErrorMsgSenha] = useState('');

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    schema
      .validate({ email, senha })
      .then(() => {
        setErroSenha(false);
        setErroEmail(false);

        dispatch(signInRequest(email, senha));
      })
      .catch(error => {
        if (error.path === 'senha') {
          setErroSenha(true);
          setErrorMsgSenha(error.message);
        } else {
          setErroSenha(false);
        }

        if (error.path === 'email') {
          setErroEmail(true);
          setErrorMsgEmail(error.message);
        } else {
          setErroEmail(false);
        }
      });
  }

  return (
    <LoginContainer>
      <Message>
        <Form onSubmit={handleSubmit} loading={loading}>
          <Form.Field>
            <Image
              src="https://static.wixstatic.com/media/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.png/v1/fill/w_222,h_46,al_c,q_80,usm_0.66_1.00_0.01/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.webp"
              size="medium"
              centered
            />
            <Header as="h1">Basix Contact</Header>
            <Form.Input
              label="E-mail"
              id="email"
              fluid
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={
                erroEmail
                  ? {
                      content: errorMsgEmail,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Senha"
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              error={
                erroSenha
                  ? {
                      content: errorMsgSenha,
                      pointing: 'below',
                    }
                  : false
              }
            />
          </Form.Field>
          <Button primary type="submit">
            Entrar
          </Button>
        </Form>
      </Message>
    </LoginContainer>
  );
}
