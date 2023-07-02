import styled from 'styled-components';
export const Wrapped = styled.div`
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 27px;

  .image {
    // width: 357px;
    // height: 289px;
    border-radius: 25px;
  }

  .article {
    align-self: flex-start;
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
  @media (min-width: 37.5rem) {
    flex-direction: row;

    .image {
      width: 284px;
      border-radius: 35.1703px;
    }
  }
`;
