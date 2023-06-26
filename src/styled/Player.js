import styled from 'styled-components';
export const Wrapper = styled.div`
  div:first-child {
    display: flex;
    align-items: center;
    gap: 42px;
    button:nth-of-type(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      background-color: rgba(250, 205102, 1);
    }
  }

  .input__div {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    width: 100%;
    .range {
      position: relative;
      width: 100%;
      height: 12px;
      border-radius: 50px;
      background-color: #fff;
      input[type='range'] {
        position: absolute;
        -webkit-appearance: none;
        width: 10%;
        outline: none;
        background-color: #facd66;
        height: inherit;
        border-radius: 50px;
      }
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        -webkit-appearance: none;
        background: url(./assets/images/icon-slider.svg);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border: 1px solid #fff;
        height: 12px;
        width: 12px;
        border-radius: 50%;
      }
    }
  }
`;
