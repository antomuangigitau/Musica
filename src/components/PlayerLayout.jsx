/* eslint-disable react/prop-types */
import styled from 'styled-components';
const PlayerLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
`;
export default PlayerLayout;
