/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { addContactRequest } from '~/store/modules/contato/actions';
import { Container } from './styles';

export default function Contato({ location }) {
  const dispatch = useDispatch();
  const search = new URLSearchParams(location.search);

  const [did, setDid] = useState(search.get('did') || '');
  const [descricao, setDescricao] = useState('');
  const [fraseologia, setFraseologia] = useState('');
  const [contactFields, setContactFields] = useState([]);

  function updateContactFields(event) {
    setContactFields(
      contactFields.map(item => {
        if (item.nome_campo === event.target.name) {
          item.conteudo = event.target.value;
        }
        return item;
      })
    );
  }

  async function handleAddField() {
    const { value: campo } = await Swal.fire({
      title: 'Adicionar novo campo',
      input: 'text',
      inputPlaceholder: 'Digite o nome do campo',
    });

    if (contactFields.map(item => item.nome_campo).includes(campo)) {
      await Swal.fire({
        type: 'error',
        title: 'Erro no nome do campo',
        text: 'Já existe um campos com este nome !',
      });
      return;
    }
    if (campo && /^[a-z0-9]*$/.test(campo)) {
      setContactFields([...contactFields, { nome_campo: campo, conteudo: '' }]);
    } else {
      await Swal.fire({
        type: 'error',
        title: 'Erro no nome do campo',
        text: 'Aceito somente letras minusculas e numeros sem espaços !',
      });
    }
  }

  function handleDeleteField(nome) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `Apagar campo: ${nome}`,
      text: 'Tem certeza que deseja deletar ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.value) {
        setContactFields(
          contactFields.filter(item => item.nome_campo !== nome)
        );
      }
      return false;
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      did,
      descricao,
      fraseologia,
      ContactFields: contactFields,
    };

    dispatch(addContactRequest(obj));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="did">
          DID:
          <input
            id="did"
            name="did"
            placeholder="DID"
            type="text"
            value={did}
            onChange={e => setDid(e.target.value)}
          />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            name="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
        </label>

        {contactFields.length > 0 && <hr />}

        <div className="fields">
          {contactFields.map(field => {
            return (
              <div key={field.nome_campo}>
                <label htmlFor={field.nome_campo}>{field.nome_campo}</label>
                <input
                  id={field.nome_campo}
                  name={field.nome_campo}
                  placeholder={field.nome_campo}
                  value={field.conteudo}
                  onChange={e => updateContactFields(e)}
                />
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteField(field.nome_campo);
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
        <button type="button" className="btn" onClick={() => handleAddField()}>
          Adicionar Campo
        </button>
        <hr />

        <label htmlFor="fraseologia">
          Fraseologia de atendimento:
          <textarea
            id="fraseologia"
            name="fraseologia"
            placeholder="Fraseologia"
            value={fraseologia}
            onChange={e => setFraseologia(e.target.value)}
          />
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
}

Contato.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};
