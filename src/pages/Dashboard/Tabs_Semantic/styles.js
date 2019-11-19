import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px 5px;
  height: 100%;

  .tabs {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  div.ui.pointing.menu {
    display: flex !important;
    flex-wrap: wrap;
    margin-bottom: 5px;

    a {
      border-bottom: 1px solid #f2f2f2;
    }
  }
`;
