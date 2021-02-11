import { FiPlusSquare } from 'react-icons/fi';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/logo.svg';
import Button from '../Button';

interface HeaderProps {
  onClickNewPlate: () => void;
}

function Header({ onClickNewPlate }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo src={logo} data-testid="logo" />

        <Button text="Novo Prato" onClick={onClickNewPlate} icon={<FiPlusSquare size={24} />} />
      </Content>
    </Container>
  );
}

export default Header;
