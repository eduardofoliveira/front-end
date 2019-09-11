import styled from 'styled-components';

import { Navbar } from 'react-bootstrap';

export const NavbarEdit = styled(Navbar)`
  img {
    max-width: 25px;
    margin: 5px;
  }
`;

export const Container = styled.div`
  --background: cornflowerblue;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      max-height: 48px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }

    aside {
      display: flex;
      align-items: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #777;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
