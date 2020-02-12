import React from 'react';
import { Message, Button, Form as FormR } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

import { Display, FormContainer } from './styles';
import AccordionCloud from '../Accordion';
import {
  writeComment,
  changeTicketStatus,
  deleteTicketRequest,
  deleteAllOpenTicketsRequest,
} from '~/store/modules/websocket/actions';
import { updateTicketRequestDashboard } from '~/store/modules/ticket/actions';

const options = [
  {
    key: 1,
    value: 1,
    text: 'Aberto',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    key: 2,
    value: 2,
    text: 'Fechado',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 3,
    value: 3,
    text: 'Pendente',
    label: { color: 'yellow', empty: true, circular: true },
  },
];

export default function Form({ chamado }) {
  const dispatch = useDispatch();

  function handleSubmit() {
    const { id, comentario, aberto } = chamado;

    if (aberto === 1) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        type: 'error',
        title: 'Erro no Status',
        text:
          'Chamado não pode ser salvo com status em aberto, selecione outro status',
      });
      return false;
    }

    dispatch(updateTicketRequestDashboard({ id, comentario, aberto }));
    return true;
  }

  return (
    <>
      <Display>
        <div className="display">
          {chamado.fromComment && (
            <>
              <Message>
                <Message.Header>Originador</Message.Header>
                <Link to={`/contato/${chamado.id_from}`}>
                  <p>{chamado.from}</p>
                </Link>
              </Message>
              <Message>
                <Message.Header>Descrição do Originador</Message.Header>
                <p>{chamado.fromComment}</p>
              </Message>
            </>
          )}
          {!chamado.fromComment && (
            <>
              <Message>
                <Message.Header>Originador</Message.Header>
                <p>{chamado.from}</p>
              </Message>
              <Message className="btn_message" color="red">
                <p>Contato inexistente</p>
                <Link to={`/contatos/add?did=${chamado.from}`}>
                  <Button size="mini" type="button" positive>
                    Adicionar
                  </Button>
                </Link>
              </Message>
            </>
          )}

          {chamado.toComment && (
            <>
              <Message>
                <Message.Header>Destino</Message.Header>
                <p>{chamado.to}</p>
              </Message>
              <Message>
                <Message.Header>Descrição do Destino</Message.Header>
                <p>{chamado.toComment}</p>
              </Message>
            </>
          )}
          {!chamado.toComment && (
            <>
              <Message>
                <Message.Header>Destino</Message.Header>
                <p>{chamado.to}</p>
              </Message>
              <Message className="btn_message" color="red">
                <p>Destino não cadastrado</p>
                <Link to={`/contatos/add?did=${chamado.to}`}>
                  <Button size="mini" type="button" positive>
                    Adicionar
                  </Button>
                </Link>
              </Message>
            </>
          )}
        </div>

        {chamado.detalhes && chamado.detalhes.length > 0 && (
          <FormR>
            <Message>
              <FormR.Group className="fields_personalizados">
                {chamado.detalhes.map(field => {
                  return (
                    <FormR.Input
                      key={field.id}
                      name={field.nome_campo}
                      label={field.nome_campo}
                      placeholder={field.nome_campo}
                      value={field.conteudo}
                      readOnly
                    />
                  );
                })}
              </FormR.Group>
            </Message>
          </FormR>
        )}

        {chamado.historico && chamado.historico.length > 0 && (
          <AccordionCloud historico={chamado.historico} />
        )}

        {chamado.script && (
          <FormR>
            <FormR.TextArea
              label="Script de atendimento"
              placeholder="Script de atendimento não cadastrado"
              value={chamado.script}
              rows="8"
              readOnly
              className="script_atendimento"
            />
          </FormR>
        )}

        <FormContainer>
          <FormR className="form_chamado" onSubmit={handleSubmit}>
            <FormR.Select
              name="status"
              label="Status:"
              options={options}
              placeholder="Selecione uma opção"
              value={chamado.aberto}
              onChange={(e, v) =>
                dispatch(
                  changeTicketStatus({ id: chamado.id, aberto: v.value })
                )
              }
            />
            <FormR.TextArea
              label="Detalhes do atendimento"
              placeholder="Dados da chamada da consultas futuras"
              rows="8"
              value={chamado.comentario || ''}
              onChange={e =>
                dispatch(
                  writeComment({ id: chamado.id, comment: e.target.value })
                )
              }
            />
            <div className="btn_area">
              <div>
                <Button type="submit" color="blue">
                  Salvar
                </Button>
                <Button
                  type="button"
                  color="red"
                  onClick={() => {
                    dispatch(deleteTicketRequest(chamado.id));
                  }}
                >
                  Descartar
                </Button>
              </div>
              <div>
                <Button
                  type="button"
                  color="red"
                  onClick={() => dispatch(deleteAllOpenTicketsRequest())}
                >
                  Descartar Todos
                </Button>
              </div>
            </div>
          </FormR>
        </FormContainer>
      </Display>
    </>
  );
}

Form.propTypes = {
  chamado: PropTypes.shape({
    id: PropTypes.number,
    comentario: PropTypes.string,
    aberto: PropTypes.number,
    from: PropTypes.string,
    fromComment: PropTypes.string,
    to: PropTypes.string,
    toComment: PropTypes.string,
    script: PropTypes.string,
    historico: PropTypes.arrayOf(PropTypes.shape()),
    id_from: PropTypes.string,
    detalhes: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};
