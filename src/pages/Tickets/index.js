/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeTicketsTypeRequest,
  showTicketsRequest,
  changeTicketsUserRequest,
} from '~/store/modules/tickets/actions';

import { Container, Menu, ListTickets, Ticket } from './styles';

const statusString = ['', 'aberto', 'fechado', 'pendente'];

export default function Tickets() {
  const dispatch = useDispatch();
  const [proto, setProto] = useState('');
  const [de, setDe] = useState('');
  const [para, setPara] = useState('');

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
          <input
            id="protocolo"
            type="text"
            value={proto}
            onChange={e => setProto(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="de">De</label>
          <input
            id="de"
            type="text"
            value={de}
            onChange={e => setDe(e.target.value)}
          />
        </div>
        <div className="Search_Control">
          <label htmlFor="para">Para</label>
          <input
            id="para"
            type="text"
            value={para}
            onChange={e => setPara(e.target.value)}
          />
        </div>
      </div>

      <ListTickets>
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
