/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socketio from 'socket.io-client';

import { Form, Input } from '@rocketseat/unform';
import { Container, ButtonContainer, TicketContainer } from './styles';

export default function Tabs() {
  const { profile } = useSelector(state => state.user);

  const [mostraDetalhes, setMostrarDetalhes] = useState(false);

  const [chamados, setChamados] = useState([
    {
      from: '11961197559',
      to: '551135880115',
      user: 'Eduardo',
      domain: 'cloud.cloudcom.com.br',
      callid: '4svni-wfnzsv-k1gd46fy-1-k1m96p79-2gj6',
      event: 'ESTABLISHED',
      fromComment: 'Eduardo F Oliveira',
      toComment: 'Suporte Basix',
      script: 'Seguir este script',
      id_from: 543,
      detalhes: [
        {
          id: 19,
          nome_campo: 'endereco',
          conteudo: 'Rua Flávio Nobre de Campos',
          fk_id_agenda: 543,
        },
        { id: 20, nome_campo: 'numero', conteudo: '186', fk_id_agenda: 543 },
        {
          id: 21,
          nome_campo: 'complemento',
          conteudo: 'Casa 1',
          fk_id_agenda: 543,
        },
        {
          id: 36,
          nome_campo: 'tipo',
          conteudo: 'Casa - Alugada',
          fk_id_agenda: 543,
        },
        {
          id: 37,
          nome_campo: 'tipo',
          conteudo: 'Casa - Alugada',
          fk_id_agenda: 543,
        },
      ],
      historico: [
        {
          id: 42521,
          comentario: null,
          inicio: '10/10/2019 19:23:54',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42520,
          comentario: null,
          inicio: '10/10/2019 18:59:05',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42519,
          comentario: null,
          inicio: '10/10/2019 18:58:41',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42518,
          comentario: null,
          inicio: '10/10/2019 18:55:39',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42517,
          comentario: null,
          inicio: '10/10/2019 18:54:47',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42516,
          comentario: null,
          inicio: '10/10/2019 18:27:53',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42515,
          comentario: null,
          inicio: '10/10/2019 18:24:37',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42514,
          comentario: null,
          inicio: '10/10/2019 18:06:20',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42513,
          comentario: null,
          inicio: '10/10/2019 18:05:19',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42512,
          comentario: null,
          inicio: '10/10/2019 18:03:46',
          status: 'Aberto',
          nome: 'Eduardo',
        },
      ],
      id: 42630,
      display: 'block',
    },
    {
      from: '11961197559',
      to: '551135880866',
      user: 'Eduardo',
      domain: 'cloud.cloudcom.com.br',
      callid: '4svni-wfnzsv-k1gd46fy-1-k1m96p79-2gj6',
      event: 'ESTABLISHED',
      fromComment: 'Eduardo F Oliveira',
      toComment: 'Suporte Brastel',
      script: 'Seguir este script',
      id_from: 543,
      detalhes: [],
      historico: [
        {
          id: 42521,
          comentario: null,
          inicio: '10/10/2019 19:23:54',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42520,
          comentario: null,
          inicio: '10/10/2019 18:59:05',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42519,
          comentario: null,
          inicio: '10/10/2019 18:58:41',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42518,
          comentario: null,
          inicio: '10/10/2019 18:55:39',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42517,
          comentario: null,
          inicio: '10/10/2019 18:54:47',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42516,
          comentario: null,
          inicio: '10/10/2019 18:27:53',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42515,
          comentario: null,
          inicio: '10/10/2019 18:24:37',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42514,
          comentario: null,
          inicio: '10/10/2019 18:06:20',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42513,
          comentario: null,
          inicio: '10/10/2019 18:05:19',
          status: 'Aberto',
          nome: 'Eduardo',
        },
        {
          id: 42512,
          comentario: null,
          inicio: '10/10/2019 18:03:46',
          status: 'Aberto',
          nome: 'Eduardo',
        },
      ],
      id: 42631,
      display: 'none',
    },
  ]);

  useEffect(() => {
    const socket = socketio('http://35.171.122.245:83');
    socket.on(`${profile.dominio}-${profile.user_basix}`, data => {
      setChamados(
        [...chamados, data].map(chamado => {
          if (chamado.id !== data.id) {
            chamado.display = 'none';
          } else {
            chamado.display = 'block';
          }
          return chamado;
        })
      );
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openCity(id) {
    setChamados(
      chamados.map(chamado => {
        if (chamado.id === id) {
          chamado.display = 'block';
        } else {
          chamado.display = 'none';
        }

        return chamado;
      })
    );
  }

  return (
    <Container>
      <p>Tabs</p>
      {JSON.stringify(chamados)}
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
              initialData={{ from: chamado.fromComment, to: chamado.toComment }}
              id={chamado.id}
              key={chamado.id}
              className="ticket"
              style={{ display: chamado.display }}
            >
              <div className="horizontal">
                <fieldset className="contact-detail">
                  <legend>Originador:</legend>
                  <div className="contact-fields">
                    <div>
                      Numero: <span>{chamado.from}</span>
                    </div>
                    <div>
                      Descrição: <Input type="text" name="from" />
                    </div>
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

              {!mostraDetalhes && chamado.detalhes.length > 0 && (
                <button
                  type="button"
                  className="btn-detalhes btn-green"
                  onClick={() => setMostrarDetalhes(!mostraDetalhes)}
                >
                  Detalhes
                </button>
              )}

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
                  {mostraDetalhes && (
                    <button
                      type="button"
                      className="btn-detalhes btn-red"
                      onClick={() => setMostrarDetalhes(!mostraDetalhes)}
                    >
                      Ocultar
                    </button>
                  )}
                </fieldset>
              )}

              <p>{chamado.texto}</p>
            </Form>
          );
        })}
      </TicketContainer>
    </Container>
  );
}
