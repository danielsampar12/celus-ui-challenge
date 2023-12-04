import { HeaderContainer, Logo, HeaderTitle } from './styles';
import { IProps } from './IProps';
import Search from 'components/Search';

function Header({ logo }: IProps) {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HeaderTitle>Travel Blog</HeaderTitle>
      <Search />
    </HeaderContainer>
  );
}

export default Header;
