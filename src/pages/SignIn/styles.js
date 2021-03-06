import styled from 'styled-components';
import { darken } from 'polished';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 450px;

  div.message {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 550px;
  }

  form {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 50px;
    }

    div.field h1 {
      color: #3b9eff;
      text-align: center;
      margin-bottom: 50px;
    }

    div.btn {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 250px;
  }

  h1 {
    color: #3b9eff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }
`;
