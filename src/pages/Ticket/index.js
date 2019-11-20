import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form, Message, Loader, Divider } from 'semantic-ui-react';

import {
  getTicketRequest,
  updateTicketRequest,
} from '~/store/modules/ticket/actions';
import { FormContainer } from './styles';

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

export default function Ticket({ match }) {
  const dispatch = useDispatch();
  const { ticket, loading } = useSelector(state => state.ticket);
  const { id } = match.params;

  const [status, setStatus] = useState();
  const [comentario, setComentario] = useState('');

  const [deDID, setDeDid] = useState('');
  const [deDescricao, setDeDescricao] = useState('');

  const [paraDID, setParaDid] = useState('');
  const [paraDescricao, setParaDescricao] = useState('');

  useEffect(() => {
    setStatus(ticket.aberto);
    setComentario(ticket.comentario);

    if (ticket.de && typeof ticket.de === 'string') {
      setDeDid(ticket.de);
    }
    if (ticket.de && typeof ticket.de === 'object') {
      setDeDid(ticket.de.did);
      setDeDescricao(ticket.de.descricao);
    }

    if (ticket.para && typeof ticket.para === 'string') {
      setParaDid(ticket.para);
    }
    if (ticket.para && typeof ticket.para === 'object') {
      setParaDid(ticket.para.did);
      setParaDescricao(ticket.para.descricao);
    }
  }, [ticket]);

  useEffect(() => {
    dispatch(getTicketRequest(id));
  }, [dispatch, id]);

  function handleSubmit() {
    const data = {
      id,
      comentario,
      aberto: status,
    };

    dispatch(updateTicketRequest(data));
  }

  return (
    <FormContainer>
      {!loading ? (
        <Form onSubmit={handleSubmit}>
          <Message>
            <Form.Input name="id" value={id} label="ID:" readOnly />
            <Divider />
            <Form.Group widths="equal">
              <Form.Input name="inicio" value={ticket.inicio} label="Inicio:" />
              <Form.Input
                name="termino"
                value={ticket.termino}
                label="Termino:"
              />
              <Form.Select
                fluid
                name="status"
                label="Status:"
                options={options}
                placeholder="Selecione uma opção"
                value={status}
                onChange={(e, v) => setStatus(v.value)}
              />
            </Form.Group>
            <Divider />
            {typeof ticket.de === 'string' && (
              <Form.Input
                name="de.did"
                placeholder="De"
                label="De:"
                value={deDID}
                readOnly
              />
            )}

            {typeof ticket.de === 'object' && (
              <Form.Group widths="equal">
                <Form.Input
                  name="de.did"
                  placeholder="Numero"
                  label="Numero:"
                  value={deDID}
                  readOnly
                />
                <Form.Input
                  name="de.descricao"
                  placeholder="Descrição"
                  label="Descrição:"
                  value={deDescricao}
                  readOnly
                />
              </Form.Group>
            )}

            {typeof ticket.para === 'string' && (
              <Form.Input
                name="para"
                placeholder="Para"
                label="Para:"
                value={paraDID}
                readOnly
              />
            )}

            {typeof ticket.para === 'object' && (
              <Form.Group widths="equal">
                <Form.Input
                  name="para.did"
                  placeholder="Numero"
                  label="Numero:"
                  value={paraDID}
                  readOnly
                />
                <Form.Input
                  name="para.descricao"
                  placeholder="Descrição"
                  label="Descrição:"
                  value={paraDescricao}
                  readOnly
                />
              </Form.Group>
            )}
            <Form.TextArea
              name="comentario"
              label="Comentarios da ligação"
              placeholder="detalhes da chamada..."
              value={comentario}
              onChange={e => setComentario(e.target.value)}
            />
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

Ticket.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
