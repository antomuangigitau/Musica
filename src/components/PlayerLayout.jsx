/* eslint-disable react/prop-types */
import styled from 'styled-components';
const PlayerLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  width: 100%;
  overflow: auto;
  border: 1px solid red;
  margin-left: 0;
  margin-bottom: 120px;
  @media (min-width: 64rem) {
    margin-left: 29px;
  }
`;
export default PlayerLayout;
