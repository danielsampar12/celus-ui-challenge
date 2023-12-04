import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  display: grid;
  padding: 0 20px;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 4px;

    margin-bottom: 32px;
    height: 120px;
  }
`;

export const LogoAndTitleContainer = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  height: 60px;
  margin-right: 20px;
`;
export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
