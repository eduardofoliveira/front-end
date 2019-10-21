import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  div {
    a {
      margin: 5px 0 0;
      height: 44px;
      padding: 10px 15px;
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
`;

export const Titulo = styled.h1`
  color: #fff;
  text-align: center;
`;

export const Table = styled.table`
  border-radius: 4px;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;

  td,
  th {
    padding: 8px;
  }

  th:first-child,
  td:first-child {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  th:last-child,
  td:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  -th + th {
    border-left: 1px solid #999;
  }

  td + td {
    border-left: 1px solid #006cf0;
  }

  -td + td {
    border-bottom: 1px solid #999;
  }

  tr + tr {
    border-top: 1px solid #006cf0;
  }

  tbody td {
    text-align: center;
    color: #333;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.2);
  }

  tbody tr:hover {
    background-color: rgba(0, 0, 255, 0.3);
  }

  td.ativo {
    background-color: rgba(0, 255, 0, 0.3);
  }

  td.inativo {
    background-color: rgba(255, 0, 0, 0.3);
    color: #000;
  }

  td a {
    text-decoration: none;
    color: #006cf0;
    font-weight: bold;
  }
`;
