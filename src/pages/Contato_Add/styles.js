import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px;

  form {
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
        width: 100%;

        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }

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
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      width: 100%;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    .fields {
      justify-content: space-around;
      display: flex;
      flex-wrap: wrap;
    }

    .fields div {
      width: 50%;
      padding: 5px;

      label {
        display: block;
      }

      input {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        width: 70%;
      }

      button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        padding-left: 10px;
        padding-right: 10px;
        width: 30%;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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

    .btn {
      background: #f64c75;

      &:hover {
        background: ${darken(0.1, '#f64c75')};
      }

      &:active {
        background-color: ${darken(0.2, '#f64c75')};
      }
    }
  }
`;
