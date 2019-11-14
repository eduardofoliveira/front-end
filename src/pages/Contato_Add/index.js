/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Form, Message, Button } from 'semantic-ui-react';

import { addContactRequest } from '~/store/modules/contato/actions';
import { SemanticContainer } from './styles';

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

  function handleSubmit() {
    const obj = {
      did,
      descricao,
      fraseologia,
      ContactFields: contactFields,
    };

    dispatch(addContactRequest(obj));
  }

  return (
    <SemanticContainer>
      <Form onSubmit={handleSubmit}>
        <Message>
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
          <Form.Group className="fields_personalizados">
            {contactFields &&
              contactFields.map(field => {
                return (
                  <Form.Input
                    key={field.nome_campo}
                    name={field.nome_campo}
                    fluid
                    label={field.nome_campo}
                    placeholder={field.nome_campo}
                    value={field.conteudo}
                    onChange={e => updateContactFields(e)}
                    action={{
                      type: 'button',
                      color: 'red',
                      icon: 'delete',
                      onClick: () => {
                        handleDeleteField(field.nome_campo);
                      },
                    }}
                  />
                );
              })}
          </Form.Group>
          <Button fluid positive type="button" onClick={() => handleAddField()}>
            Adicionar campo
          </Button>
          <Form.TextArea
            name="fraseologia"
            label="Fraseologia"
            placeholder="Fraseologia de atendimento"
            value={fraseologia || ''}
            onChange={e => setFraseologia(e.target.value)}
          />
          <Button fluid primary type="submit">
            Adicionar
          </Button>
        </Message>
      </Form>
    </SemanticContainer>
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
