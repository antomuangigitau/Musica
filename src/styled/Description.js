import styled from 'styled-components';
export const Wrapped = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  gap: 27px;
  .container {
    width: 284px;
    height: 288.97px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 35.1703px;
    }
  }
  .article {
    align-self: flex-end;
    h3 {
      color: #a4c7c6;
      font-weight: 700;
      font-size: 35px;
      line-height: 42px;
    }
    article {
      color: #efeee0;
      font-weight: 400;
      font-size: 14px;
      line-height: 16.8px;
      margin: 10px 0 40px 0;
      p {
        margin-bottom: 10px;
      }
    }
    div {
      display: flex;
      align-items: center;
      gap: 9px;
      button {
        svg {
          margin-right: 12px;
        }
      }
    }
  }
`;
