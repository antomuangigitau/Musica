import styled from 'styled-components';
export const Wrapper = styled.header`
  display: none;
  @media (min-width: 48rem) {
    grid-area: header;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    form {
      flex: 1;
      margin-left: 29px;
      .input {
        border: 1px solid transparent;
        height: 53px;
        border-radius: 32px;
        width: 100%;
        padding-left: 30px;
        transition: 0.3s linear;
        input {
          width: 100%;
          height: 100%;
          margin-left: 20px;
          margin-right: 60px;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          line-height: 18px;
        }
        input::placeholder {
          font-size: 400;
          color: rgba(255, 255, 255, 0.25);
        }
      }
      .input:hover {
        border: 1px solid var(--Grayish);
        border-radius: 32px;
      }
    }
  }
`;
