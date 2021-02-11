import styled from 'styled-components/macro';

export const Container = styled.div`
  border-radius: 8px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 198px;

  background: #ffb84c;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;

  background: #f0f0f5;

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;

    color: #3d3d4d;

    margin-bottom: 16px;
  }

  p {
    color: #3d3d4d;
    line-height: 26px;

    margin-bottom: 16px;
  }

  > div {
    margin-top: auto;
  }
`;

interface PriceProps {
  available: boolean;
}

export const Price = styled.div<PriceProps>`
  color: ${(props) => (props.available ? '#39b100' : '#6C6C80')};

  font-size: 24px;
  font-family: 'Roboto', sans-serif;

  strong {
    margin-left: 6px;

    font-weight: bold;
  }
`;

export const Footer = styled.div`
  display: flex;

  background: #e4e4eb;

  padding: 20px 32px;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 12px;
    font-family: 'Roboto', sans-serif;

    color: #3d3d4d;
  }

  > button {
    display: flex;

    padding: 12px;
    border-radius: 8px;

    background: #ffffff;

    &:hover,
    &:focus {
      opacity: 0.75;
    }

    &:active {
      opacity: 0.6;
    }
  }

  > button + button {
    margin-left: 6px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 88px;
    height: 32px;
    margin-left: 12px;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #c72828;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 16px;

      &:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 40px;
        left: 8px;
        bottom: 6px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 10px;
      }
    }

    input:checked + .slider {
      background-color: #39b100;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(32px);
      -ms-transform: translateX(32px);
      transform: translateX(32px);
    }
  }
`;
