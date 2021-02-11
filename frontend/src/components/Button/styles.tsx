import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  color: white;
  background: #39b100;

  &:hover,
  &:focus {
    filter: brightness(0.92);
  }

  &:active {
    filter: brightness(0.85);
  }

  .Header__button-text {
    font-weight: 600;
    padding: 16px 24px;
  }

  .Header__button-icon {
    display: flex;

    background: #41c900;
    padding: 16px;
  }
`;
