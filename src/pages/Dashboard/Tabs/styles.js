import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);

  button {
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: #fff;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background-color: #fff;
      color: #000;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  button.ativo {
    background-color: #fff;
    color: #000;
  }
`;

export const TicketContainer = styled.div`
  .historico-item {
    margin: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    textarea {
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      padding: 15px 15px;
      border: 0;
      border-radius: 4px;
      height: 150px;
      font-size: 16px;
      margin-bottom: 10px;
      width: 100%;
    }
  }

  .horizontal {
    display: flex;
  }

  .btn-detalhes {
    margin: 5px;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 4px;
  }

  .btn-green {
    background-color: rgba(0, 255, 0, 0.3);
  }

  .btn-red {
    background-color: rgba(255, 0, 0, 0.3);
  }

  .contact-detail {
    flex: 1;
    margin: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    .contact-fields {
      display: flex;

      div {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    span {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      flex: 1;
      margin: 10px 10px 10px 10px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      flex: 1;
      margin: 10px 10px 10px 10px;
    }
  }

  .fieldsetdetalhes {
    margin: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    textarea {
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      padding: 15px 15px;
      border: 0;
      border-radius: 4px;
      height: 150px;
      font-size: 16px;
      margin-bottom: 10px;
      width: 100%;

      &::placeholder {
        color: #555;
        font-size: 16px;
      }
    }

    #script {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  .fieldsethistorico {
    margin: 5px;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }

  .detalhes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      width: 25%;

      label {
        font-weight: bold;
        margin: 0px 5px;
      }
      div {
        width: unset;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin: 0px 5px;
        padding: 15px;
      }
    }
  }

  form {
    select {
      margin: 5px;
      padding: 8px 8px;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    select:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    select:focus {
      -webkit-box-shadow: 0 0 3px 1px rgba(0, 0, 255, 0.5);
      -moz-box-shadow: 0 0 3px 1px rgba(0, 0, 255, 0.5);
      box-shadow: 0 0 3px 1px rgba(0, 0, 255, 0.5);
    }
    select:before {
      content: '▼';
    }
    option {
      background: #7a90c0;
      border-radius: 2px;
      line-height: 18px;
      outline: none;
    }
    option:focus {
      -webkit-box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    }

    div.buttons {
      display: flex;
      justify-content: space-between;
      margin-left: 5px;
      margin-right: 5px;

      button {
        margin: 5px;
        padding: 8px 16px;
        background-color: rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 4px;
      }

      button.btn-blue {
        background-color: #2185d0;
        color: #fff;
        font-weight: bold;
        padding: 0.78571429em 1.5em 0.78571429em;
        box-shadow: 4px 4px #999;

        &:hover {
          background: ${darken(0.1, '#2185d0')};
        }

        &:active {
          background-color: ${darken(0.2, '#2185d0')};
          box-shadow: 2px 2px #666;
          transform: translateY(1px);
        }
      }

      button.btn-red {
        background-color: #db2828;
        color: #fff;
        font-weight: bold;
        padding: 0.78571429em 1.5em 0.78571429em;
        box-shadow: 4px 4px #999;

        &:hover {
          background: ${darken(0.1, '#db2828')};
        }

        &:active {
          background-color: ${darken(0.2, '#db2828')};
          box-shadow: 2px 2px #666;
          transform: translateY(1px);
        }
      }
    }
  }
`;
