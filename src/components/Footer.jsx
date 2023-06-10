import styled from 'styled-components';
const Footer = () => {
  return <Wrapper>footer</Wrapper>;
};

const Wrapper = styled.footer`
  background: rgba(29, 33, 35, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  filter: drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51));
  grid-area: footer;
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100vw;
  // max-width: 100vw;
  height: 120px;
`;
export default Footer;
