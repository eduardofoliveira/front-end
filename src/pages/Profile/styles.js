import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  div.carregando {
    display: flex;
    justify-content: center;
    justify-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      line-height: 44px;
      display: flex;

      input {
        margin-right: 10px;
      }

      select {
        border: 0;
        margin-left: 50px;
        background: rgba(0, 0, 0, 0); /* Imagem de fundo (Seta) */
        background-position: 205px center; /*Posição da imagem do background*/
        height: 48px; /* altura do select, importante para que tenha a mesma altura em todo os navegadores */
        font-size: 14px; /* Tamanho da Fonte */
        padding: 13px 20px 13px 12px; /* Configurações de padding para posicionar o texto no campo */
        color: #fff; /* Cor da Fonte */
        text-indent: 0.01px; /* Remove seta padrão do FireFox */
        text-overflow: ''; /* Remove seta padrão do FireFox */
        select::-ms-expand {
          display: none;
        } /* Remove seta padrão do IE*/

        option {
          color: #000;
          background: #3b9eff;
        }
      }
    }

    #tech-label {
      display: flex;
      justify-content: space-between;

      width: 100%; /* Tamanho final do select */
      overflow: hidden; /* Esconde o conteúdo que passar do tamanho especificado */
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

      &::placeholder {
        color: #555;
        font-size: 16px;
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
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s;
    box-shadow: 4px 4px #999;

    &:hover {
      background: ${darken(0.1, '#f64c75')};
    }

    &:active {
      background-color: ${darken(0.2, '#f64c75')};
      box-shadow: 2px 2px #666;
      border: 1px solid #fff;
      transform: translateY(1px);
    }
  }
`;

export const FormContainer = styled.div`
  margin-top: 50px;

  form {
    width: 700px;
    margin: 0 auto;

    .check-integracao {
      margin: 10px 0px;
    }
  }
`;
