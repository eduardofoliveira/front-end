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

export const ListContatos = styled.div``;
