import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import socketio from 'socket.io-client';

export default function Dashboard() {
  const { profile } = useSelector(state => state.user);
  const [chamados, setChamados] = useState([
    {
      id: 1,
      titulo: 'London',
      texto: 'London is the capital of England.',
      display: 'block',
    },
    {
      id: 2,
      titulo: 'Paris',
      texto: 'Paris is the capital of France.',
      display: 'none',
    },
    {
      id: 3,
      titulo: 'Tokyo',
      texto: 'Tokyo is the capital of Japan.',
      display: 'none',
    },
  ]);

  useEffect(() => {
    const socket = socketio('http://35.171.122.245:83');
    socket.on(`${profile.dominio}-${profile.user_basix}`, data => {
      setChamados([...chamados, data]);
      // console.log(data);
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
    <div>
      <h1>Dashboard</h1>
      {JSON.stringify(chamados)}

      {chamados.map(chamado => {
        return (
          <div
            id={chamado.id}
            key={chamado.id}
            className="city"
            style={{ display: chamado.display }}
          >
            <h2>{chamado.titulo}</h2>
            <p>{chamado.texto}</p>
          </div>
        );
      })}
      <div className="w3-bar w3-black">
        {chamados.map(chamado => {
          return (
            <button
              key={chamado.id}
              type="button"
              className="w3-bar-item w3-button"
              onClick={() => openCity(chamado.id)}
            >
              {chamado.titulo}
            </button>
          );
        })}
      </div>
    </div>
  );
}
