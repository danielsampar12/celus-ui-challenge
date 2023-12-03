import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  max-width: 100%;
  padding: 24px 25px;
  flex-direction: row;
  gap: 16px;

  border-radius: 4px;
  background: #f6f6f6;
`;

export const Input = styled.input`
  padding: 4px 8px 4px 16px;
  /* align-items: center; */

  width: 90%;

  border-radius: 2px;
  border: 1px solid #cacaca;
  background: #fff;
`;

export const SendText = styled.span`
  color: #949494;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.175px;
`;

export const SendButton = styled.button`
  all: unset;

  cursor: pointer;
`;
