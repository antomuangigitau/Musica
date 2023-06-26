import styled from 'styled-components';

export const Wrapper = styled.footer`
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
    grid-template-columns: 1fr 3fr 1fr;
  }
  div:nth-of-type(2) {
    border: 1px solid red;
  }
  @media (min-width: 64rem) {
    padding-left: 67px;
  }
`;
