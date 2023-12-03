import styled from 'styled-components';
import { Container } from '@mui/material';

export const PostPageContainer = styled(Container)`
  padding-top: 130px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 16px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TitleTextAndComentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  line-height: 28px;
  letter-spacing: 0.3px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  margin-right: 5px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
