/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { Form, Input, Select } from '@rocketseat/unform';
import { Container, ButtonContainer, TicketContainer } from './styles';

import {
  changeTicketRequest,
  openTicketsRequest,
  checkOpenTicketsRequest,
  deleteTicketRequest,
  deleteAllOpenTicketsRequest,
} from '~/store/modules/websocket/actions';
import { updateTicketRequestDashboard } from '~/store/modules/ticket/actions';

const options = [
  { id: '1', title: 'Aberto' },
  { id: '2', title: 'Fechado' },
  { id: '3', title: 'Pendente' },
];

export default function Tabs() {
  const dispatch = useDispatch();
  const [mostraDetalhes, setMostrarDetalhes] = useState(false);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  const { chamados } = useSelector(state => state.websocket);

  useEffect(() => {
    dispatch(checkOpenTicketsRequest());
    dispatch(openTicketsRequest());
  }, [dispatch]);

  function openCity(id) {
    dispatch(changeTicketRequest(id));
  }

  function submitForm(data) {
    if (!data.status) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        type: 'error',
        title: 'Campo em branco',
        text: 'Selecione um status para o chamado',
      });
    } else {
      const { atendimento: comentario, status: aberto, id } = data;
      dispatch(updateTicketRequestDashboard({ id, comentario, aberto }));
    }
  }

  return (
    <Container>
      {/* {JSON.stringify(chamados)} */}
      <ButtonContainer>
        {chamados.map(chamado => {
          return (
            <button
              key={chamado.id}
              type="button"
              className={`w3-bar-item w3-button ${
                chamado.display === 'block' ? 'ativo' : ''
              }`}
              onClick={() => openCity(chamado.id)}
            >
              {chamado.id}
            </button>
          );
        })}
      </ButtonContainer>

      <TicketContainer>
        {chamados.map(chamado => {
          return (
            <Form
              initialData={{
                id: chamado.id,
                from: chamado.fromComment,
                to: chamado.toComment,
                script: chamado.script,
                atendimento: chamado.comentario,
                status: chamado.aberto,
              }}
              onSubmit={submitForm}
              id={chamado.id}
              key={chamado.id}
              className="ticket"
              style={{ display: chamado.display || 'none' }}
            >
              <Input id="id" name="id" hidden />

              <div className="horizontal">
                <fieldset className="contact-detail">
                  <legend>Originador:</legend>
                  <div className="contact-fields">
                    {!chamado.id_from && (
                      <div>
                        Numero:{' '}
                        <span>
                          <Link to={`/contatos/add?did=${chamado.from}`}>
                            {chamado.from}
                          </Link>
                        </span>
                      </div>
                    )}
                    {chamado.id_from && (
                      <div>
                        Numero:{' '}
                        <span>
                          <Link to={`/contato/${chamado.id_from}`}>
                            {chamado.from}
                          </Link>
                        </span>
                      </div>
                    )}

                    {chamado.id_from && (
                      <div>
                        Descrição: <Input type="text" name="from" />
                      </div>
                    )}
                  </div>
                </fieldset>

                <fieldset className="contact-detail">
                  <legend>Destino:</legend>
                  <div className="contact-fields">
                    <div>
                      Numero: <span>{chamado.to}</span>
                    </div>
                    <div>
                      Descrição: <Input type="text" name="to" />
                    </div>
                  </div>
                </fieldset>
              </div>

              <div>
                {!mostraDetalhes && chamado.detalhes.length > 0 && (
                  <button
                    type="button"
                    className="btn-detalhes btn-green"
                    onClick={() => setMostrarDetalhes(!mostraDetalhes)}
                  >
                    Detalhes
                  </button>
                )}
                {mostraDetalhes && (
                  <button
                    type="button"
                    className="btn-detalhes btn-red"
                    onClick={() => setMostrarDetalhes(!mostraDetalhes)}
                  >
                    Ocultar
                  </button>
                )}
                {!mostrarHistorico && chamado.historico.length > 0 && (
                  <button
                    type="button"
                    className="btn-detalhes btn-green"
                    onClick={() => setMostrarHistorico(!mostrarHistorico)}
                  >
                    Historico
                  </button>
                )}
                {mostrarHistorico && (
                  <button
                    type="button"
                    className="btn-detalhes btn-red"
                    onClick={() => setMostrarHistorico(!mostrarHistorico)}
                  >
                    Ocultar
                  </button>
                )}
              </div>

              {mostraDetalhes && chamado.detalhes.length > 0 && (
                <fieldset className="fieldsetdetalhes">
                  <legend>Detalhes:</legend>
                  <div className="detalhes">
                    {chamado.detalhes.map(detalhes => {
                      return (
                        <div key={detalhes.id}>
                          <label>{detalhes.nome_campo}</label>
                          <div>{detalhes.conteudo}</div>
                        </div>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              {mostrarHistorico && chamado.historico.length > 0 && (
                <fieldset className="fieldsethistorico">
                  <legend>Historico:</legend>

                  {chamado.historico.map(item => {
                    return (
                      <div key={item.id}>
                        <fieldset className="historico-item">
                          <legend>{item.id}</legend>
                          <div>
                            Inicio: <strong>{item.inicio}</strong>
                          </div>
                          <div>
                            Status: <strong>{item.status}</strong>
                          </div>
                          <div>
                            Nome: <strong>{item.nome}</strong>
                          </div>
                          {item.comentario && (
                            <div>
                              <strong>Detalhes:</strong>
                              <br />
                              <textarea
                                defaultValue={item.comentario}
                                disabled
                              />
                            </div>
                          )}
                        </fieldset>
                      </div>
                    );
                  })}
                </fieldset>
              )}

              <fieldset className="fieldsetdetalhes">
                <legend>Script de atendimento:</legend>

                <Input
                  id="script"
                  name="script"
                  placeholder="Script de atendimento"
                  disabled
                  multiline
                />
              </fieldset>

              <fieldset className="fieldsetdetalhes">
                <legend>Detalhes da chamada:</legend>
                Status: <Select id="status" name="status" options={options} />
                <Input
                  id="atendimento"
                  name="atendimento"
                  placeholder="dados da chamada"
                  multiline
                />
              </fieldset>

              <div className="buttons">
                <div>
                  <button type="submit" className="btn-blue">
                    Salvar
                  </button>
                  <button
                    type="button"
                    className="btn-red"
                    onClick={() => dispatch(deleteTicketRequest(chamado.id))}
                  >
                    Descartar
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn-red"
                    onClick={() => dispatch(deleteAllOpenTicketsRequest())}
                  >
                    Descartar Todos
                  </button>
                </div>
              </div>
            </Form>
          );
        })}
      </TicketContainer>
    </Container>
  );
}
