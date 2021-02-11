import styled from 'styled-components/macro';

export const Form = styled.form`
  h1 {
    color: black;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;

    margin-bottom: 40px;
  }

  label {
    font-family: 'Roboto', 'sans-serif';
    color: #6c6c80;

    font-size: 14px;
  }

  input {
    font-family: 'Roboto', 'sans-serif';

    display: block;
    width: 100%;
    border: none;

    background: #ffffff;
    border-radius: 8px;
    padding: 18px 24px;
    margin-top: 8px;
    margin-bottom: 24px;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  .EditFoodModal__row {
    display: flex;
    gap: 16px;

    label {
      flex: 2;
    }

    label + label {
      flex: 1;
    }
  }

  .EditFoodModal__row--button {
    display: flex;
    justify-content: flex-end;

    margin-top: 48px;
  }
`;
