import styled from 'styled-components';

export const Wrapper = styled.section`
  font-family: 'Quicksand', sans-serif;
  .first__div {
    overflow: auto;
    h2 {
      color: #efeee0;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 13px;
    }
  }
  .first__div::-webkit-scrollbar {
    padding-top: 10px;
    height: 8px;
  }

  .first__div::-webkit-scrollbar-track {
    background: none;
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  .first__div::-webkit-scrollbar-thumb {
    background-color: var(--Grayish);
    border-radius: 10px;
  }
  .first__div:not(:last-child) {
    margin-bottom: 50px;
  }
  .second__div {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-bottom: 20px;
  }

  .third__div {
    h4,
    h5 {
      color: #fff;
      font-weight: 400;
    }
    h4 {
      margin: 5px 0;
    }
    h5 {
      font-size: 12px;
    }
    div {
      width: 153px;
      height: 153px;
      cursor: pointer;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 25px;
    }
  }
`;
