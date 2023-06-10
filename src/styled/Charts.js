import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Quicksand', sans-serif;
  .header {
    font-weight: 700;
    font-size: 24px;
    color: #efeee0;
    margin-bottom: 14px;
  }
  .container {
    width: 417px;
    background: #1a1e1f;
    border-radius: 20px;
    padding: 17px 29px 17px 17px;
    display: flex;
    justify-content: space-between;
    a {
      /* align-items: center; */
      display: inline-flex;
      gap: 14px;
      img {
        width: 63px;
        height: 63px;
        border-radius: 10px;
      }
      div {
        h4 {
          font-weight: 400;
          font-size: 17px;
          line-height: 20.4px;
          color: #fff;
        }
      }
    }
  }
  div:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
