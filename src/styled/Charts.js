import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 40px;
  font-family: 'Quicksand', sans-serif;
  overflow: auto;
  &::-webkit-scrollbar {
    padding-top: 10px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--Grayish);
    border-radius: 10px;
  }
  .header {
    font-weight: 700;
    font-size: 24px;
    color: #efeee0;
    margin-bottom: 14px;
  }
  .outer {
    display: flex;
    gap: 10px;
    padding-bottom: 20px;
    .container {
      min-width: 323px;
      background: #1a1e1f;
      border-radius: 20px;
      padding: 15px 14px 23px 14px;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        font-size: 17px;
        h4,
        h5 {
          font-size: 12px;
        }
        h4 {
          color: rgba(255, 255, 255, 0.5);
        }
        h5 {
          color: rgba(255, 255, 255, 1);
        }
        img {
          width: 108px;
          height: 99px;
          border-radius: 20px;
        }
      }
      span {
        align-self: flex-start;
      }
    }
  }

  @media (min-width: 64rem) {
    margin-bottom: 0;
    overflow: hidden;
    .outer {
      gap: 12px;
      padding-bottom: 0;
      flex-direction: column;
      .container {
        padding: 17px 29px 17px 17px;
        a {
          display: flex;
          gap: 14px;
          img {
            width: 63px;
            height: 63px;
            border-radius: 10px;
          }
        }
      }
    }

    div:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
`;

// .container {

//   a {
//     /* align-items: center; */
//     /* display: inline-flex; */
//     gap: 14px;
//     img {
//       width: 63px;
//       height: 63px;
//
//     }
//     div {
//       h4 {
//         font-weight: 400;
//         font-size: 17px;
//         line-height: 20.4px;
//         color: #fff;
//       }
//     }
//   }
// }
