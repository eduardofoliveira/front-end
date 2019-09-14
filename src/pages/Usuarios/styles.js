import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  color: #333;
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
    background-color: rgba(0, 0, 255, 0.2);
  }

  td.ativo {
    background-color: rgba(0, 255, 0, 0.08);
  }

  td.inativo {
    background-color: rgba(255, 0, 0, 0.08);
    color: #000;
  }

  td a {
    text-decoration: none;
    color: #006cf0;
    font-weight: bold;
  }
`;
