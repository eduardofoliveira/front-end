/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Message, Button, Segment, Icon } from 'semantic-ui-react';

import { getContactsRequest } from '~/store/modules/contatos/actions';
import { ContainerSemantic, ListSemantic } from './styles';

export default function Contatos() {
  const dispatch = useDispatch();
  const contatos = useSelector(state => state.contatos.contacts);
  const [ident, setIdent] = useState('');
  const [did, setDid] = useState('');

  useEffect(() => {
    dispatch(getContactsRequest({ ident, did }));
  }, [did, dispatch, ident]);

  return (
    <ContainerSemantic>
      <Message>
        <Input
          id="did"
          type="text"
          value={did}
          placeholder="DID"
          onChange={e => setDid(e.target.value)}
        />
        <Input
          id="identificacao"
          type="text"
          value={ident}
          placeholder="Identificação"
          onChange={e => setIdent(e.target.value)}
        />
        <Link to="/contatos/add">
          <Button fluid primary>
            Adicionar
          </Button>
        </Link>
        <Link to="/contatos/template">
          <Button fluid color="green">
            Template
          </Button>
        </Link>
      </Message>
      {/* <Message> */}
      <div className="ui cards">
        {contatos.rows &&
          contatos.rows.map(contato => {
            return (
              <ListSemantic key={contato.id}>
                <div>
                  <Link to={`/contato/${contato.id}`}>
                    <Segment
                      attached="top"
                      className={`header block ${contato.did}`}
                    >
                      <div className="header_ticket">
                        <div>
                          <Icon color="green" name="phone" />
                          {contato.did}
                          <Icon
                            color="green"
                            name="users"
                            className="left-space"
                          />
                          {contato.descricao}
                        </div>
                      </div>
                    </Segment>
                  </Link>
                  <Segment attached="bottom">
                    {/* {JSON.stringify(contato)} */}

                    {contato.fraseologia}
                  </Segment>
                </div>
              </ListSemantic>
            );
            // return (
            //   <div className="card" key={contato.id}>
            //     <div className="content">
            //       <div className="header">{contato.did}</div>
            //       <div className="meta">{contato.descricao}</div>
            //       <div className="description">
            //         {contato.fraseologia && (
            //           <div className="body">
            //             {contato.fraseologia.substring(0, 35)}
            //           </div>
            //         )}
            //         {!contato.fraseologia && '_'}
            //       </div>
            //     </div>
            //     <div className="extra content">
            //       <div className="ui two buttons">
            //         <Link
            //           to={`/contato/${contato.id}`}
            //           className="ui basic green button"
            //         >
            //           Editar
            //         </Link>

            //         <a href="/contatos" className="ui basic red button">
            //           Remover
            //         </a>
            //       </div>
            //     </div>
            //   </div>
            // );
          })}
      </div>
      {/* </Message> */}
    </ContainerSemantic>
  );
}
