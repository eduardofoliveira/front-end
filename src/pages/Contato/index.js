import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Message, Loader, Button } from 'semantic-ui-react';
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
import { ContainerSemantic } from './styles';

export default function Contato({ match }) {
  const dispatch = useDispatch();
  const { contact, loading } = useSelector(state => state.contato);
  const { id } = match.params;

  const [did, setDid] = useState('');
  const [descricao, setDescricao] = useState('');
  const [fraseologia, setFraseologia] = useState('');

  useEffect(() => {
    setDid(contact.did);
    setDescricao(contact.descricao);
    setFraseologia(contact.fraseologia);
  }, [contact]);

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

    const retorno = contact.ContactFields.filter(
      item => item.nome_campo === campo
    );
    if (retorno.length > 0) {
      const MySwal = withReactContent(Swal);
      return MySwal.fire({
        icon: 'error',
        title: 'Erro ao adicionar',
        text: 'Este campo já existe !',
      });
    }

    if (campo) {
      dispatch(addCustomParamRequest({ name: campo }));
    }
    return false;
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

  function handleSubmit() {
    // const { did, descricao, fraseologia } = data;
    dispatch(updateContactRequest({ ...contact, did, descricao, fraseologia }));
  }

  return (
    <ContainerSemantic>
      {!loading ? (
        <Form onSubmit={handleSubmit}>
          <Message>
            <Form.Group widths="equal">
              <Form.Input
                name="did"
                fluid
                label="Numero"
                placeholder="Numero"
                value={did || ''}
                onChange={e => setDid(e.target.value)}
              />
              <Form.Input
                name="descricao"
                fluid
                label="Descrição"
                placeholder="Nome do usuário"
                value={descricao || ''}
                onChange={e => setDescricao(e.target.value)}
              />
            </Form.Group>
          </Message>
          {contact.ContactFields && contact.ContactFields.length > 0 && (
            <Message>
              <Form.Group className="fields_personalizados">
                {contact.ContactFields &&
                  contact.ContactFields.map(field => {
                    return (
                      <Form.Input
                        key={field.nome_campo}
                        name={field.nome_campo}
                        fluid
                        label={field.nome_campo}
                        placeholder={field.nome_campo}
                        value={field.conteudo}
                        onChange={e =>
                          setValue(e.target.value, field.nome_campo)
                        }
                        action={{
                          type: 'button',
                          color: 'red',
                          icon: 'delete',
                          onClick: () => {
                            handleDeleteField({
                              id: field.id,
                              name: field.nome_campo,
                              contact_id: contact.id,
                            });
                          },
                        }}
                      />
                    );
                  })}
              </Form.Group>
            </Message>
          )}
          <Button fluid positive type="button" onClick={() => handleAddField()}>
            Adicionar campo
          </Button>
          <Message>
            <Form.TextArea
              name="fraseologia"
              label="Fraseologia"
              placeholder="Fraseologia de atendimento"
              value={fraseologia || ''}
              onChange={e => setFraseologia(e.target.value)}
            />
          </Message>
          <Button fluid primary type="submit">
            Atualizar
          </Button>
        </Form>
      ) : (
        <Loader active />
      )}
    </ContainerSemantic>
  );
}

Contato.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
