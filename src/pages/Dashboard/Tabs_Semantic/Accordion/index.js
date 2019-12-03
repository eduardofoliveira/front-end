import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import moment from 'moment';

const status = ['', 'Aberto', 'Fechado', 'Pendente'];

export default function AccordionCloud({ historico }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <Accordion fluid styled>
      {historico.map((item, index) => {
        return (
          <div key={item.id}>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={handleClick}
            >
              <Icon name="dropdown" />
              {`#${item.id}`}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              <p>{`${moment(item.inicio, 'DD/MM/YYYY HH:mm:ss').format(
                'DD-MM-YYYY HH:mm:ss'
              )} - ${status[item.status]} - ${item.nome}`}</p>
              <p>{item.comentario}</p>
            </Accordion.Content>
          </div>
        );
      })}
    </Accordion>
  );
}
