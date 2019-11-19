import styled from 'styled-components';

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  div.display {
    display: flex;
    flex-direction: row;

    div {
      flex: 1;
      margin: 0;
    }

    div + div {
      margin-left: 5px;
    }
  }

  .btn_message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div.ui.message + div.ui.message {
    margin-left: 4px;
  }

  div.ui.message {
    margin-top: 0px;
    margin-bottom: 5px;
  }

  div.script_atendimento {
    textarea {
      background-color: #dff0ff;

      &&:active {
        background-color: #dff0ff;
      }
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .form_chamado {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  div.btn_area {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
  }
`;
