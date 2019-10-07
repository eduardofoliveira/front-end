import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
  getContactRequest,
  updateCustomParamRequest,
  addCustomParamRequest,
  updateContactRequest,
  deleteFieldRequest,
} from '~/store/modules/contato/actions';
import { Container } from './styles';

export default function Contato({ match }) {
  const dispatch = useDispatch();
  const { contact, loading } = useSelector(state => state.contato);
  const { id } = match.params;

  useEffect(() => {
    dispatch(getContactRequest({ id }));
  }, [dispatch, id]);

  function setValue(value, target) {
    dispatch(updateCustomParamRequest({ value, target }));
  }

  async function handleAddField() {
    const { value: campo } = await Swal.fire({
      title: 'Adicionar novo campo',
      input: 'text',
      inputPlaceholder: 'Digite o nome do campo',
    });

    if (campo) {
      dispatch(addCustomParamRequest({ name: campo }));
    }
  }

  function handleDeleteField(data) {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `Apagar campo: ${data.name}`,
      text: 'Tem certeza que deseja deletar ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then(result => {
      if (result.value) {
        dispatch(deleteFieldRequest(data));
      }
      return false;
    });
  }

  function handleSubmit(data) {
    const { did, descricao, fraseologia } = data;
    dispatch(updateContactRequest({ ...contact, did, descricao, fraseologia }));
  }

  return (
    <Container>
      {!loading && (
        <Form initialData={contact} onSubmit={handleSubmit}>
          <Input name="did" placeholder="ID" label="DID:" />
          <Input name="descricao" placeholder="Descrição" label="Descrição:" />
          {contact.ContactFields.length > 0 && <hr />}

          <div className="fields">
            {contact.ContactFields.map(field => {
              return (
                <div key={field.id}>
                  <Input
                    name={field.nome_campo}
                    placeholder={field.nome_campo}
                    label={field.nome_campo}
                    value={field.conteudo}
                    onChange={e => setValue(e.target.value, field.nome_campo)}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleDeleteField({
                        id: field.id,
                        name: field.nome_campo,
                        contact_id: contact.id,
                      })
                    }
                    className="btn"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => handleAddField()}
          >
            Adicionar Campo
          </button>
          <hr />
          <Input
            id="fraseologia"
            name="fraseologia"
            placeholder="Fraseologia"
            label="Fraseologia:"
            multiline
          />
          <button type="submit">Atualizar</button>
        </Form>
      )}
    </Container>
  );
}

Contato.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
