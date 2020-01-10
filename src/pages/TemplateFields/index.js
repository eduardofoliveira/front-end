import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Card, Button, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
  loadCustomParamRequest,
  deleteCustomParamRequest,
  addCustomParamTemplateRequest,
} from '~/store/modules/contato/actions';

import { Container } from './styles';

export default function TemplateFields() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const contato = useSelector(state => state.contato);

  useEffect(() => {
    dispatch(loadCustomParamRequest(profile.id_dominio));
  }, [dispatch, profile.id_dominio]);

  useEffect(() => {
    // console.log(contato || '');
    // console.log(profile || '');
  }, [contato, profile]);

  async function handleAddField() {
    const { value: campo } = await Swal.fire({
      title: 'Adicionar novo campo',
      input: 'text',
      inputPlaceholder: 'Digite o nome do campo',
    });

    const retorno = contato.contact.ContactFields.filter(
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
      dispatch(
        addCustomParamTemplateRequest({
          name: campo,
          id_dominio: profile.id_dominio,
        })
      );
    }
    return false;
  }

  function handleDeleteField(nome, id) {
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
        dispatch(deleteCustomParamRequest(id));
        // setContactFields(
        //   contactFields.filter(item => item.nome_campo !== nome)
        // );
      }
      return false;
    });
  }

  return (
    <Container>
      <Card>
        <Card.Content>
          <Button
            icon
            labelPosition="left"
            primary
            size="small"
            onClick={() => handleAddField()}
          >
            <Icon name="plus" /> Adicionar campo
          </Button>
        </Card.Content>
        <Card.Content>
          <Form>
            <Form.Group className="fields_personalizados">
              {contato.contact.ContactFields &&
                contato.contact.ContactFields.map(field => {
                  return (
                    <Form.Input
                      key={field.nome_campo}
                      name={field.nome_campo}
                      fluid
                      label={field.nome_campo}
                      placeholder={field.nome_campo}
                      value={field.conteudo}
                      onChange={() => {}}
                      action={{
                        type: 'button',
                        color: 'red',
                        icon: 'delete',
                        onClick: () => {
                          handleDeleteField(field.nome_campo, field.id);
                        },
                      }}
                    />
                  );
                })}
            </Form.Group>
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
}
