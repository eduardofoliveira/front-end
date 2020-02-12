import styled from 'styled-components';

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

  div.header.block:hover {
    background: rgba(59, 158, 255, 0.2);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  div.Search_Control {
    display: flex;
    flex-direction: column;
    margin: 10px;

    -label {
      display: block;
      text-align: center;
    }
  }

  div.ui.input > div {
    width: 100% !important;
  }

  .input_date {
    margin: 0;
    width: 100%;
    flex: 1 0 auto;
    outline: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    text-align: left;
    line-height: 1.21428571em;
    font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    padding: 0.67857143em 1em;
    background: #fff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.28571429rem;
    transition: box-shadow 0.1s ease, border-color 0.1s ease;
    box-shadow: none;
  }
`;

export const Menu = styled.ul`
  width: 200px;
  margin: 10px;
  padding: 0;

  p {
    text-align: center;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  li {
    margin-bottom: 5px;
    list-style-type: none;

    button {
      width: 100%;
      border: 0;
      background-color: #e0e1e2;
      color: rgba(0, 0, 0, 0.6);
      height: 20px;
      box-shadow: 3px 3px #999;
      border-radius: 4px;
      outline: 0;
    }
  }

  li.ativo {
    button {
      background-color: #2185d0;
      color: #fff;
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
      font-size: 18px;
      text-transform: uppercase;
    }
  }

  div.aberto {
    background-color: rgba(0, 255, 0, 0.3);
    div:nth-child(2) {
      color: red;
    }
    &:hover {
      background-color: rgba(0, 255, 0, 0.5);
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
