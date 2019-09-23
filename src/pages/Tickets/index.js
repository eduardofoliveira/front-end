import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeTicketsTypeRequest,
  showTicketsRequest,
} from '~/store/modules/tickets/actions';

import { Container, Menu, ListTickets, Ticket } from './styles';

export default function Tickets() {
  const dispatch = useDispatch();
  const { visualizacao, tickets } = useSelector(state => state.tickets);

  useEffect(() => {
    dispatch(showTicketsRequest());
  }, [dispatch, visualizacao]);

  return (
    <Container>
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
      <ListTickets>
        {tickets.rows.map(ticket => {
          return (
            <Ticket key={ticket.id}>
              <Link to={`chamado/${ticket.id}`}>
                <div
                  className={`title ${
                    ticket.aberto === 1 ? 'aberto' : 'fechado'
                  }`}
                >
                  <div>
                    #<span>{ticket.id}</span>
                  </div>
                  <div>{ticket.aberto === 1 ? 'aberto' : 'fechado'}</div>
                </div>
              </Link>

              <div className="body">
                <div className="identify">
                  <div>
                    From:
                    <p>{ticket.de}</p>
                  </div>
                  <div>
                    To:
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

        {/* <Ticket>
          <Link to="chamado/451235">
            <div className="title aberto">
              <div>
                #<span>451235</span>
              </div>
              <div>Aberto</div>
            </div>
          </Link>

          <div className="body">
            <div className="identify">
              <div>
                From:
                <p>5511961197559</p>
              </div>
              <div>
                To:
                <p>551135880866</p>
              </div>
              <div>
                Usuário:
                <p>Eduardo</p>
              </div>
            </div>
            <p>dgkljfdlgkjfdklgfd</p>
          </div>
        </Ticket>

        <Ticket>
          <Link to="chamado/451235">
            <div className="title fechado">
              <div>
                #<span>451235</span>
              </div>
              <div>Fechado</div>
            </div>
          </Link>

          <div className="body">
            <div className="identify">
              <div>
                From:
                <p>5511961197559</p>
              </div>
              <div>
                To:
                <p>551135880866</p>
              </div>
              <div>
                Usuário:
                <p>Caio</p>
              </div>
            </div>
            <p>dgkljfdlgkjfdklgfd</p>
          </div>
        </Ticket>

        <Ticket>
          <Link to="chamado/451235">
            <div className="title pendente">
              <div>
                #<span>451235</span>
              </div>
              <div>Pendente</div>
            </div>
          </Link>

          <div className="body">
            <div className="identify">
              <div>
                From:
                <p>5511961197559</p>
              </div>
              <div>
                To:
                <p>551135880866</p>
              </div>
              <div>
                Usuário:
                <p>Renata</p>
              </div>
            </div>
            <p>dgkljfdlgkjfdklgfd</p>
          </div>
        </Ticket> */}
      </ListTickets>
    </Container>
  );
}
