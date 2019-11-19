import React, { useEffect } from 'react';
import { Tab } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';
import {
  changeTabPosition,
  checkOpenTicketsRequest,
  openTicketsRequest,
} from '~/store/modules/websocket/actions';
import Form from './Form';

export default function TabsSemantic() {
  const dispatch = useDispatch();
  const { chamados, index } = useSelector(state => state.websocket);

  useEffect(() => {
    dispatch(checkOpenTicketsRequest());
    dispatch(openTicketsRequest());
  }, [dispatch]);

  const handleTabChange = (e, { activeIndex }) => {
    dispatch(changeTabPosition(activeIndex));
  };

  return (
    <Container>
      <Tab
        className="tabs"
        menu={{ pointing: true }}
        activeIndex={index}
        onTabChange={handleTabChange}
        panes={chamados.map(chamado => {
          return {
            menuItem: chamado.id.toString(),
            render: () => {
              return <Form chamado={chamado} />;
            },
          };
        })}
      />
    </Container>
  );
}
