/* eslint-disable react/prop-types */
import styled from 'styled-components';
const Button = ({ onClick, children }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 32px;
  padding: 11px;
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export default Button;
