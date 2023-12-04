import { HeaderContainer, Logo, HeaderTitle, LogoAndTitleContainer } from './styles';
import { IProps } from './IProps';
import Search from 'components/Search';
import { useNavigate } from 'react-router-dom';

function Header({ logo }: IProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer onClick={() => navigate('/')}>
      <LogoAndTitleContainer>
        <Logo src={logo} alt="logo" />
        <HeaderTitle>Travel Blog</HeaderTitle>
      </LogoAndTitleContainer>
      <Search />
      <div></div>
    </HeaderContainer>
  );
}

export default Header;
