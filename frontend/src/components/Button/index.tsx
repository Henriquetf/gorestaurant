import { ButtonHTMLAttributes, ReactElement } from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  icon: ReactElement;
}

function Button({ text, onClick, icon, ...rest }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick} {...rest}>
      <div className="Header__button-text">{text}</div>
      <div className="Header__button-icon">{icon}</div>
    </StyledButton>
  );
}

export default Button;
