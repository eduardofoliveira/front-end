import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 5px;

  div.ui.card {
    width: 100%;
  }

  div.ui.card div.content:nth-child(2n) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
  }

  .fields_personalizados {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;

    div.field {
      width: 50%;
    }
  }
`;
