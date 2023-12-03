import styled from 'styled-components';
import { IProps } from './IProps';

export const ButtonWithVariant = styled.button<Omit<IProps, 'text'>>`
  all: unset;
  cursor: pointer;

  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
  background-color: ${({ variant }) => (variant === 'outline' ? '#fff' : '#004A93')};
  color: ${({ variant }) => (variant === 'outline' ? '#004A93;' : '#fff')};
  border: ${({ variant }) => (variant === 'outline' ? '1px solid #004A93' : undefined)};
`;
