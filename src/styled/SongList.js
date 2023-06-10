import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px 0;
  .container {
    background: rgba(51, 55, 59, 0.37);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 22px 10px 10px;
    color: #fff;
    font-size: 12px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    line-height: 14.4px;
    cursor: pointer;
    .image__container {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-right: 80px;
      img {
        width: 39px;
        height: 39px;
        border-radius: 8.53125px;
      }
    }
  }
  .container:not(:last-child) {
    margin-bottom: 10px;
  }
  .artist__details {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      flex-basis: 200px;
    }
  }
  .btn {
    border: none;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(5px);
    border-radius: 8px;
    padding: 11px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .btn:hover {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
  }
`;
