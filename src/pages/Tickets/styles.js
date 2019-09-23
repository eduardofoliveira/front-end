import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.ul`
  width: 200px;
  margin: 10px;

  p {
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  li {
    margin-bottom: 5px;

    button {
      width: 100%;
      border: 0;
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
      height: 20px;
      box-shadow: 3px 3px #999;
      border-radius: 4px;
    }
  }

  li.ativo {
    button {
      background-color: rgba(255, 255, 255, 0.9);
      color: #000;
    }
  }

  li:hover {
    button {
      color: #000;
    }
  }

  li:active {
    button:active {
      box-shadow: 1px 1px #999;
    }
  }
`;

export const ListTickets = styled.div`
  margin: 5px;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`;

export const Ticket = styled.div`
  min-width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:hover {
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
  }

  a {
    color: #000;
  }

  div.title {
    display: flex;
    justify-content: space-between;
    border: 1px solid #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    div:nth-child(1) {
      font-style: italic;
    }

    div {
      padding: 0px 5px;
      border-radius: 4px;
      line-height: 32px;
      font-size: 28px;
      text-transform: uppercase;
    }
  }

  div.aberto {
    background-color: rgba(0, 255, 0, 0.5);
    div:nth-child(2) {
      color: red;
    }
    &:hover {
      background-color: rgba(0, 255, 0, 0.8);
    }
  }

  div.fechado {
    background-color: rgba(255, 0, 0, 0.5);
    div:nth-child(2) {
      color: white;
    }
    &:hover {
      background-color: rgba(255, 0, 0, 0.8);
    }
  }

  div.pendente {
    background-color: rgba(255, 255, 0, 0.5);
    div:nth-child(2) {
      color: #000;
    }
    &:hover {
      background-color: rgba(255, 255, 0, 0.8);
    }
  }

  div.body {
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0px 5px;

    div.identify {
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      margin-bottom: 5px;

      p {
        font-weight: normal;
        margin: 2px;
        display: inline-block;
        min-width: 50px;
        margin-left: 5px;
      }
    }
  }
`;
