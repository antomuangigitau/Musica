/* eslint-disable react/prop-types */
import styled from 'styled-components';
const PlayerLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  grid-area: main;
  margin-right: 59px;
  padding-bottom: 100px;
`;
export default PlayerLayout;
