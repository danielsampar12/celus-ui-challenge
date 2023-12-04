import styled from 'styled-components';

export const Container = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  max-width: 100%;
  padding: 24px 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  border-radius: 4px;
  background: #f6f6f6;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const UserImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Time = styled.span`
  color: #949494;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
`;

export const ButtonsContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UnstyledButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const ReplyText = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.15px;
`;
