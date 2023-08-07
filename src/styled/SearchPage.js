import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  .center {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-bottom: 120px;
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
        cursor: pointer;
      }
      img {
        width: 100%;
        border-radius: 25px;
      }
    }
    .text__show {
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        text-align: center;
      }
    }
  }
  @media (min-width: 64rem) {
    .center {
      .grid-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  @media (min-width: 90rem) {
    .center {
      .grid-container {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

// width: 100%;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .center {
//     h5 {
//       color: #fff;
//       font-size: 28px;
//     }
//   }
