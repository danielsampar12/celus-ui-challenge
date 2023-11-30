import React from 'react';
import { HeaderContainer, Logo, HeaderTitle } from './styles';

class Header extends React.Component<{ logo: string }> {
  // state = {
  //   showLogo: false,
  // };

  // componentDidUpdate(prevProps: any) {
  //   // why this?
  //   if (prevProps.logo !== this.props.logo) {
  //     this.setState({ showLogo: true });
  //   }
  // }

  render() {
    return (
      <HeaderContainer>
        <Logo src={this.props.logo} alt="logo" />
        <HeaderTitle>Travel Blog</HeaderTitle>
      </HeaderContainer>
    );
  }
}

export default Header;
