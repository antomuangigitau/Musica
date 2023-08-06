import styled from 'styled-components';

export const Wrapper = styled.header`
  font-family: 'Quicksand', sans-serif;
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
    .search-bar {
      --size: 60px;
      display: flex;
      border-radius: 50px;
      width: var(--size);
      padding: 3px;
      position: relative;
      transition: width 300ms cubic-bezier(0.18, 0.89, 0.32, 1.15);
      overflow: hidden;
      &__input {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        flex-grow: 1;
        opacity: 0;
        cursor: pointer;
      }
      &__submit {
        border-radius: 50%;
        margin-left: auto;
      }
      &:focus-within {
        width: 80%;
        .search-bar__input {
          opacity: 1;
          cursor: initial;
          width: calc(100% - var(--size));
          font-size: 16px;
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        }
      }
    }
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
