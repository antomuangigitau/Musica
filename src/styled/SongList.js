import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  .container {
    background: rgba(51, 55, 59, 0.37);
    backdrop-filter: blur(5px);
    border-radius: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 22px 10px 10px;
    color: #fff;
    font-size: 12px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    line-height: 14.4px;
    cursor: pointer;
    .image__container {
      flex: 0.05;
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: 14px;
      img {
        width: 39px;
        height: 39px;
        border-radius: 8.53125px;
      }
    }
    .artist__details {
      flex: 0.95;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .app__name {
        display: flex;
        flex-direction: column;
      }
    }
    .formatted {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      row-gap: 8px;
    }
  }
  .container:not(:last-child) {
    margin-bottom: 10px;
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
  @media (min-width: 48rem) {
    .container {
      .image__container svg {
        order: 1;
      }
      .artist__details {
        /* justify-content: flex-start; */
        .app__name {
          flex: 0.5;
          flex-direction: row;
          justify-content: space-between;
        }
        .formatted {
          justify-content: space-between;
          flex: 0.3;
          flex-direction: row;
        }
      }
    }
  }
`;
