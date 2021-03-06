import styled from 'styled-components';
import { darken } from 'polished';

export const ListSemantic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 5px;

  div.ui.bottom.attached.segment {
    margin-bottom: 5px;
  }

  div.header_ticket {
    display: flex;
    justify-content: space-between;
  }

  .left-space {
    margin-left: 20px;
  }

  div.header.block:hover {
    background: rgba(59, 158, 255, 0.2);
  }
`;

export const ContainerSemantic = styled.div`
  display: flex;
  flex-direction: row;

  div.ui.message:first-child {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-left: 5px;
    height: max-content;

    div + div {
      margin-top: 5px;
    }

    button {
      margin-top: 5px;
    }
  }

  div.ui.cards {
    margin: 0px 5px;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div.card {
      margin: 0;
      margin-bottom: 8px;
    }
  }

  div.ui.cards::after {
    display: none;
    content: '<br>';
  }

  div.ui.message:nth-child(2n) {
    padding: 10px;
    padding-top: 0px;
    margin-top: 0;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;

    div.card {
      margin: 5px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    height: 44px;
    padding: 12px 15px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s;
    box-shadow: 4px 4px #999;

    &:hover {
      background: ${darken(0.1, '#3b9eff')};
    }

    &:active {
      background-color: ${darken(0.2, '#3b9eff')};
      box-shadow: 2px 2px #666;
      border: 1px solid #fff;
      transform: translateY(1px);
    }
  }

  div.menu {
    margin-right: 10px;
  }

  div.Search_Control {
    label {
      display: block;
      text-align: center;
    }
    input {
      border: 1px solid #c3c3c3;
      width: 200px;
      margin-left: 10px;
      margin-right: 0px;
      padding: 5px;
      border-radius: 4px;
      box-shadow: 3px 3px #999;
      margin-bottom: 10px;
    }
  }
`;

export const ListContatos = styled.div`
  flex: 1;

  a {
    text-decoration: none;
    color: inherit;
  }

  .identificacao {
    color: #448aff;
    font-weight: bold;

    strong {
      color: #212121;
    }
  }

  .did {
    color: #f44336;
    font-weight: bold;

    strong {
      color: #212121;
    }
  }
`;

export const Contato = styled.div`
  div.card {
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.5);

    hr {
      border: 0.5px solid #000;
    }
  }

  div.header {
    display: flex;
  }

  div.header div {
    flex: 1;
  }

  div.body {
    margin-top: 15px;
    color: #757575;
  }

  div.fields {
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;

    div.field {
      color: #757575;
      width: 33%;
      margin-bottom: 10px;

      strong {
        color: #212121;
        display: block;
        text-transform: uppercase;
      }
    }
  }

  &:hover {
    div.card {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
      background-color: #b3e5fc;
      cursor: pointer;
    }
  }
`;
