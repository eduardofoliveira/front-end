import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
// import logo from '~/assets/contact.svg';

import { signInRequest } from '~/store/modules/auth/actions';
import { Content } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  senha: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, senha }) {
    dispatch(signInRequest(email, senha));
  }

  return (
    <>
      <Content>
        <img
          src="https://static.wixstatic.com/media/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.png/v1/fill/w_222,h_46,al_c,q_80,usm_0.66_1.00_0.01/ab9c7e_9ba9bee2c0db419dbdc13aa125975a7e~mv2.webp"
          alt="Basix Contact"
        />
        <h1>Basix Contact</h1>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="senha" type="password" placeholder="Sua senha" />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        </Form>
      </Content>
    </>
  );
}
