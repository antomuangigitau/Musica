import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  .click {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 18px;
    button {
      cursor: pointer;
    }
    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
    .play__color {
      background-color: rgba(250, 205, 102, 1);
    }
    .pause__color {
      background-color: #fff;
    }
  }
  .input__div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    color: #fff;
    p {
      font-size: 10px;
    }
    .range {
      position: relative;
      width: 100%;
      height: 4px;
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
        background: url('/public/assets/Ellipse 7.svg');
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border: 1px solid #fff;
        height: 12px;
        width: 12px;
        border-radius: 50%;
      }
    }
  }
  @media (min-width: 48rem) {
    .click {
      gap: 24px;
      .btn {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (min-width: 64rem) {
    .click {
      gap: 42px;
    }
  }
`;
