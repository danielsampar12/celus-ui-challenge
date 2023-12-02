import { HeaderContainer, Logo, HeaderTitle } from './styles';
import { IProps } from './IProps';

function Header({ logo }: IProps) {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HeaderTitle>Travel Blog</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
