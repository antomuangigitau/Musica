import styled from 'styled-components';

export const Wrapper = styled.header`
  grid-area: header;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5625rem;
  padding-bottom: 1.5625rem;
  z-index: 1;
  .header__nav {
    margin-left: 24px;
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .container {
    z-index: 4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(var(--Very-Dark), rgba(26, 30, 31, 1));
    .btn {
      display: none;
      top: 20px;
      position: absolute;
      right: 24px;
    }
    .btn__active {
      display: block;
    }
    .btn svg {
      width: 18px;
      height: 18px;
    }
    ul {
      padding-top: 109px;
      padding-left: 37px;
      li {
        a {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          display: flex;
          align-items: center;
          span {
            margin-left: 30px;
          }
        }
      }
      li:not(:last-child) {
        padding-bottom: 52px;
      }
    }
  }
  @media (min-width: 48rem) {
    display: none;
  }
`;
