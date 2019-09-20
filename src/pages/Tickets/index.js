import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, ListTickets, Ticket } from './styles';

export default function Tickets() {
  return (
    <Container>
      <Menu>
        <p>Visualizações</p>
        <li className="ativo">
          <button type="button">Todos</button>
        </li>
        <li>
          <button type="button">Abertos</button>
        </li>
        <li>
          <button type="button">Fechados</button>
        </li>
        <li>
          <button type="button">Pendentes</button>
        </li>
        <li>
          <button type="button">Meus Tickets</button>
        </li>
        <li>
          <button type="button">Deletados</button>
        </li>
      </Menu>
      <ListTickets>
        <Ticket>
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
        </Ticket>
      </ListTickets>
    </Container>
  );
}
