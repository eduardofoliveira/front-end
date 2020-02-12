/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Segment, List, Image, Icon } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
  changeTicketsTypeRequest,
  showTicketsRequest,
  changeTicketsUserRequest,
} from '~/store/modules/tickets/actions';

import { Container, Menu, ListSemantic } from './styles';

const statusString = ['', 'aberto', 'fechado', 'pendente'];
const statusSemantic = ['', 'green', 'black', 'yellow'];

export default function Tickets() {
  const dispatch = useDispatch();
  const [proto, setProto] = useState('');
  const [de, setDe] = useState('');
  const [para, setPara] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { visualizacao, visualizacaoUser, tickets } = useSelector(
    state => state.tickets
  );
  const { usuarios } = useSelector(state => state.usuarios);

  useEffect(() => {
    dispatch(showTicketsRequest({ proto, de, para }));
  }, [de, dispatch, para, proto, visualizacao, visualizacaoUser]);

  return (
    <Container>
      <div>
        <Menu>
          <p>Visualizações</p>
          <li className={visualizacao === 'todos' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('todos'))}
            >
              Todos
            </button>
          </li>
          <li className={visualizacao === 'abertos' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('abertos'))}
            >
              Abertos
            </button>
          </li>
          <li className={visualizacao === 'fechados' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('fechados'))}
            >
              Fechados
            </button>
          </li>
          <li className={visualizacao === 'pendentes' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('pendentes'))}
            >
              Pendentes
            </button>
          </li>
          <li className={visualizacao === 'meus_tickets' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('meus_tickets'))}
            >
              Meus Tickets
            </button>
          </li>
          <li className={visualizacao === 'deletados' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsTypeRequest('deletados'))}
            >
              Deletados
            </button>
          </li>
        </Menu>
        <Menu>
          <p>Usuários</p>
          <li className={visualizacaoUser === 'todos' ? 'ativo' : ''}>
            <button
              type="button"
              onClick={() => dispatch(changeTicketsUserRequest('todos'))}
            >
              Todos
            </button>
          </li>
          {usuarios.map(item => {
            return (
              <li
                key={item.id}
                className={visualizacaoUser === item.id ? 'ativo' : ''}
              >
                <button
                  type="button"
                  onClick={() => dispatch(changeTicketsUserRequest(item.id))}
                >
                  {item.nome}
                </button>
              </li>
            );
          })}
        </Menu>
        <div className="Search_Control">
          <label htmlFor="protocolo">Protocolo</label>
          <Input
            id="protocolo"
            type="text"
            value={proto}
            onChange={e => setProto(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="de">De</label>
          <Input
            id="de"
            type="text"
            value={de}
            onChange={e => setDe(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="para">Para</label>
          <Input
            id="para"
            type="text"
            value={para}
            onChange={e => setPara(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="start">Inicio</label>
          <div className="ui input">
            <DatePicker
              id="start"
              showPopperArrow={false}
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm:ss"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="dd-MM-yyyy HH:mm:ss"
              className="input_date"
              withPortal
            />
          </div>
        </div>
        <div className="Search_Control">
          <label htmlFor="end">Termino</label>
          <div className="ui input">
            <DatePicker
              id="end"
              showPopperArrow={false}
              selected={endDate}
              onChange={date => setEndDate(date)}
              showTimeSelect
              timeFormat="HH:mm:ss"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="dd-MM-yyyy HH:mm:ss"
              className="input_date"
              withPortal
            />
          </div>
        </div>
      </div>

      <ListSemantic>
        {tickets.rows.map(ticket => {
          if (ticket.aberto === 0) {
            ticket.aberto = 2;
          }

          return (
            <div key={ticket.id}>
              <Link to={`chamado/${ticket.id}`}>
                <Segment
                  attached="top"
                  className={`header block ${statusSemantic[ticket.aberto]}`}
                >
                  <div className="header_ticket">
                    <div>#{ticket.id}</div>
                    <div>
                      {moment(ticket.inicio).format('DD-MM-YYYY HH:mm:ss')}
                    </div>
                    <div>{`${statusString[ticket.aberto]}`}</div>
                  </div>
                </Segment>
              </Link>
              <Segment attached="bottom">
                <List horizontal>
                  <List.Item>
                    <Image>
                      <Icon color="green" name="phone" />
                    </Image>
                    <List.Content>
                      <List.Header>Originador</List.Header>
                      {ticket.de}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image>
                      <Icon color="orange" name="phone" />
                    </Image>
                    <List.Content>
                      <List.Header>Destino</List.Header>
                      {ticket.para}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image>
                      <Icon color="green" name="users" />
                    </Image>
                    <List.Content>
                      <List.Header>Atendente</List.Header>
                      {ticket.usuario.nome}
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </div>
          );
        })}
      </ListSemantic>

      {/* <ListTickets>
        {tickets.rows.map(ticket => {
          if (ticket.aberto === 0) {
            ticket.aberto = 2;
          }

          return (
            <Ticket key={ticket.id}>
              <Link to={`chamado/${ticket.id}`}>
                <div className={`title ${statusString[ticket.aberto]}`}>
                  <div>
                    #<span>{ticket.id}</span>
                  </div>
                  <div>{statusString[ticket.aberto]}</div>
                </div>
              </Link>

              <div className="body">
                <div className="identify">
                  <div>
                    Originador:
                    <p>{ticket.de}</p>
                  </div>
                  <div>
                    Destino:
                    <p>{ticket.para}</p>
                  </div>
                  <div>
                    Usuário:
                    <p>{ticket.usuario.nome}</p>
                  </div>
                </div>
                <p>{ticket.comentario}</p>
              </div>
            </Ticket>
          );
        })}
      </ListTickets> */}
    </Container>
  );
}
