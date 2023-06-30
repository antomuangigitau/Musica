import styled from 'styled-components';

export const Wrapper = styled.footer`
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(29, 33, 35, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  filter: drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51));
  z-index: 10;
  grid-area: footer;
  width: 100%;
  height: 120px;
  .container {
    width: 100%;
    height: inherit;
    display: grid;
    align-items: center;
    grid-template-columns: 1.5fr 3fr 1.5fr;
    gap: 20px;
    .first {
      display: flex;
      gap: 15px;
      img {
        width: 49px;
        height: 49px;
        border-radius: 14px;
      }
      div {
        h4 {
          color: #fff;
          font-size: 14px;
          line-height: 17px;
        }
        h5 {
          font-size: 10px;
          line-height: 12px;
          color: rgba(255, 255, 255, 0.44);
        }
      }
    }
  }

  @media (min-width: 64rem) {
    padding-left: 67px;
  }
`;
