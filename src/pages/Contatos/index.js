/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Message, Button } from 'semantic-ui-react';

import { getContactsRequest } from '~/store/modules/contatos/actions';
import { ContainerSemantic } from './styles';

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
      </Message>
      <Message>
        <div className="ui cards">
          {contatos.rows &&
            contatos.rows.map(contato => {
              return (
                <div className="card" key={contato.id}>
                  <div className="content">
                    <div className="header">{contato.did}</div>
                    <div className="meta">{contato.descricao}</div>
                    <div className="description">
                      {contato.fraseologia && (
                        <div className="body">{contato.fraseologia}</div>
                      )}
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <Link
                        to={`/contato/${contato.id}`}
                        className="ui basic green button"
                      >
                        Editar
                      </Link>

                      <a href="/contatos" className="ui basic red button">
                        Remover
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Message>
    </ContainerSemantic>
  );

  // return (
  //   <ContainerSemantic>
  //     <Message>
  //       <Input
  //         id="protocolo"
  //         type="text"
  //         value={ident}
  //         onChange={e => setIdent(e.target.value)}
  //       />
  //     </Message>
  //     <Message>
  //       <Input
  //         id="protocolo"
  //         type="text"
  //         value={ident}
  //         onChange={e => setIdent(e.target.value)}
  //       />
  //     </Message>

  //     <div className="menu">
  //       <div className="Search_Control">
  //         <label htmlFor="protocolo">IDENTIFICAÇÃO</label>
  //       </div>
  //       <div className="Search_Control">
  //         <label htmlFor="protocolo">DID</label>
  //         <input
  //           id="protocolo"
  //           type="text"
  //           value={did}
  //           onChange={e => setDid(e.target.value)}
  //         />
  //       </div>
  //       <div className="btn-container">
  //         <Link to="/contatos/add" className="btn">
  //           <FaPlus /> Adicionar
  //         </Link>
  //       </div>
  //     </div>

  //     <ListContatos>
  //       {contatos.rows &&
  //         contatos.rows.map(contato => {
  //           return (
  //             <Link key={contato.id} to={`/contato/${contato.id}`}>
  //               <Contato>
  //                 <div className="card">
  //                   <div className="header">
  //                     <div className="identificacao">
  //                       <strong>IDENTIFICAÇÃO:</strong>
  //                       {contato.descricao}
  //                     </div>
  //                     <div className="did">
  //                       <strong>DID:</strong>
  //                       {contato.did}
  //                     </div>
  //                   </div>
  //                   {contato.fraseologia && (
  //                     <div className="body">{contato.fraseologia}</div>
  //                   )}
  //                   {contato.fraseologia && <hr />}

  //                   <div className="fields">
  //                     {contato.ContactFields.filter(item => item.conteudo).map(
  //                       field => {
  //                         return (
  //                           <div key={field.id} className="field">
  //                             <strong>{field.nome_campo}:</strong>
  //                             {field.conteudo}
  //                           </div>
  //                         );
  //                       }
  //                     )}
  //                   </div>
  //                 </div>
  //               </Contato>
  //             </Link>
  //           );
  //         })}
  //     </ListContatos>
  //   </ContainerSemantic>
  // );
}
