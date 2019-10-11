import styled from 'styled-components';

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
  .horizontal {
    display: flex;
  }

  .btn-detalhes {
    margin: 5px;
    padding: 8px 16px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
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
`;
