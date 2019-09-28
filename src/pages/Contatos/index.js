/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContactsRequest } from '~/store/modules/contatos/actions';
import { Container, ListContatos } from './styles';

export default function Contatos() {
  const dispatch = useDispatch();
  const contatos = useSelector(state => state.contatos.contacts);

  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);

  return (
    <Container>
      <div className="menu">
        <div className="Search_Control">
          <label htmlFor="protocolo">DID</label>
          <input id="protocolo" type="text" />
        </div>
        <div className="Search_Control">
          <label htmlFor="protocolo">Descrição</label>
          <input id="protocolo" type="text" />
        </div>
      </div>

      <ListContatos>
        {contatos &&
          contatos.map(contato => {
            return <h1>{contato.did}</h1>;
          })}
      </ListContatos>
    </Container>
  );
}
