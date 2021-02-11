import styled, { keyframes } from 'styled-components/macro';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 40px 0 80px;
  background: linear-gradient(to bottom, #c72828 140px, #fff 0);

  .Dashboard__loader {
    text-align: center;
    margin-bottom: 20px;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }

  .Dashboard__loader--error {
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
`;
