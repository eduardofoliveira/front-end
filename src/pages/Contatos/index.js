/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getContactsRequest } from '~/store/modules/contatos/actions';
import { Container, ListContatos, Contato } from './styles';

export default function Contatos() {
  const dispatch = useDispatch();
  const contatos = useSelector(state => state.contatos.contacts);
  const [ident, setIdent] = useState('');
  const [did, setDid] = useState('');

  useEffect(() => {
    dispatch(getContactsRequest({ ident, did }));
  }, [did, dispatch, ident]);

  return (
    <Container>
      <div className="menu">
        <div className="Search_Control">
          <label htmlFor="protocolo">IDENTIFICAÇÃO</label>
          <input
            id="protocolo"
            type="text"
            value={ident}
            onChange={e => setIdent(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="protocolo">DID</label>
          <input
            id="protocolo"
            type="text"
            value={did}
            onChange={e => setDid(e.target.value)}
          />
        </div>
      </div>

      <ListContatos>
        {contatos.rows &&
          contatos.rows.map(contato => {
            return (
              <Link key={contato.id} to={`/contato/${contato.id}`}>
                <Contato>
                  <div className="card">
                    <div className="header">
                      <div className="identificacao">
                        <strong>IDENTIFICAÇÃO:</strong>
                        {contato.descricao}
                      </div>
                      <div className="did">
                        <strong>DID:</strong>
                        {contato.did}
                      </div>
                    </div>
                    {contato.fraseologia && (
                      <div className="body">{contato.fraseologia}</div>
                    )}
                    {contato.fraseologia && <hr />}

                    <div className="fields">
                      {contato.ContactFields.filter(item => item.conteudo).map(
                        field => {
                          return (
                            <div key={field.id} className="field">
                              <strong>{field.nome_campo}:</strong>
                              {field.conteudo}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </Contato>
              </Link>
            );
          })}
      </ListContatos>
    </Container>
  );
}
