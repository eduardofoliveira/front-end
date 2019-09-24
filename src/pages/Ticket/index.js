import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';

import {
  getTicketRequest,
  updateTicketRequest,
} from '~/store/modules/ticket/actions';
import { Container } from './styles';

const options = [
  { id: 1, title: 'Aberto' },
  { id: 2, title: 'Fechado' },
  { id: 3, title: 'Pendente' },
];

export default function Ticket({ match }) {
  const dispatch = useDispatch();
  const { ticket, loading } = useSelector(state => state.ticket);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getTicketRequest(id));
  }, [dispatch, id]);

  function handleSubmit(data) {
    dispatch(updateTicketRequest(data));
  }

  return (
    <Container>
      <div className="back-button">
        <Link to="/chamados">
          <FaBackward /> Voltar
        </Link>
      </div>

      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Form initialData={ticket} onSubmit={handleSubmit}>
          <Input name="id" placeholder="ID" label="ID:" disabled />
          <hr />
          <div className="horarios-container">
            <div className="horarios">
              <Input
                name="inicio"
                placeholder="inicio"
                label="Inicio:"
                disabled
              />
            </div>
            <div className="horarios">
              <Input
                name="termino"
                placeholder="termino"
                label="Termino:"
                disabled
              />
            </div>
            <div className="horarios">
              <Select
                id="aberto"
                name="aberto"
                label="Status:"
                options={options}
              />
            </div>
          </div>
          <hr />
          {typeof ticket.de === 'string' && (
            <Input name="de" placeholder="De" label="De:" disabled />
          )}

          {typeof ticket.de === 'object' && (
            <div className="horarios-container">
              <div className="horarios">
                <Input name="de.did" placeholder="De" label="De:" disabled />
              </div>
              <div className="horarios-2">
                <Input
                  name="de.descricao"
                  placeholder="Descricao"
                  label="Descricao:"
                  disabled
                />
              </div>
            </div>
          )}

          {typeof ticket.para === 'string' && (
            <Input name="para" placeholder="Para" label="Para:" disabled />
          )}

          {typeof ticket.para === 'object' && (
            <div className="horarios-container">
              <div className="horarios">
                <Input
                  name="para.did"
                  placeholder="Para"
                  label="Para:"
                  disabled
                />
              </div>
              <div className="horarios-2">
                <Input
                  name="para.descricao"
                  placeholder="Descricao"
                  label="Descricao:"
                  disabled
                />
              </div>
            </div>
          )}

          <Input
            name="comentario"
            multiline
            placeholder="Descriçaõ..."
            label="Dados da chamada:"
          />

          <button type="submit">Atualizar</button>
        </Form>
      )}
    </Container>
  );
}

Ticket.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
