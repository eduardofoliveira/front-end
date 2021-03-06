import styled from 'styled-components';

export const Container = styled.div`
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

    ul {
      display: inline-flex;
      color: #fff;

      li {
        & + li {
          margin-left: 15px;
        }
      }
    }

    a {
      font-weight: bold;
      font-size: 16px;
      color: #999;
      text-transform: uppercase;
      display: flex;
      align-items: center;

      &:hover {
        color: white;
      }

      svg {
        margin-right: 5px;
        width: 24px;
        height: 24px;
      }
    }

    a.active {
      color: #0288d1;
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
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const MenuContainer = styled.div`
  padding: 5px;

  a.item {
    svg {
      margin-right: 8px;
    }
  }

  .left_icon {
    display: flex !important;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  div.green_color > i {
    color: #21ba45 !important;
  }
  div.red_color > i {
    color: #db2828 !important;
  }
`;
