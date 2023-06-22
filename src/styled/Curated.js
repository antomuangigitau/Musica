import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background: #609eaf;
  border-radius: 20px;
  color: #fff;
  font-family: 'Quicksand', sans-serif;
  padding: 33px 0 42px 33px;
  .box {
    display: none;
  }
  @media (min-width: 48rem) {
    border-radius: 40px;
    /* padding: 38px 0 31px 45px; */
    .box {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
