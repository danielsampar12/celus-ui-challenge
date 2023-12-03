import styled from 'styled-components';
import { DialogContent, DialogTitle, Paper } from '@mui/material';

export const EditCommentDialogContainer = styled(Paper)`
  width: 100%;
  max-width: 1000px;
`;

export const EditCommentDialogHeader = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EditCommentDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  gap: 16px;
  padding: 0 50px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: 0.2px;
`;

export const EditCommentInput = styled.textarea`
  font-family: Roboto;
  width: 626px;
  height: 234px;
  padding: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  width: 100%;
  flex-direction: row;
  justify-content: flex-end;

  gap: 16px;
`;
