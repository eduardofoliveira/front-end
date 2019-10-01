import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  div.menu {
    margin-right: 10px;
  }

  div.Search_Control {
    label {
      display: block;
      text-align: center;
    }
    input {
      width: 200px;
      margin-left: 10px;
      margin-right: 0px;
      border: 0;
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
`;

export const Contato = styled.div`
  div.card {
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.35);

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
  }

  div.fields {
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;

    div.field {
      width: 33%;
      margin-bottom: 10px;

      strong {
        display: block;
        text-transform: uppercase;
      }
    }
  }

  &:hover {
    div.card {
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.6);
      background-color: #3b9eff;
      cursor: pointer;
    }
  }
`;
