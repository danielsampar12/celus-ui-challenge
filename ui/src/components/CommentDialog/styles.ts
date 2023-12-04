import styled from 'styled-components';
import { DialogContent, DialogTitle, Paper } from '@mui/material';

export const CommentDialogContainer = styled(Paper)`
  width: 100%;
  max-width: 1000px;

  padding-bottom: 20px;
`;
export const CommentDialogHeader = styled(DialogTitle)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CommentDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

export const ImageAndNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-size: 28px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

export const CommentText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`;

export const CommentBody = styled.p`
  font-size: 16px;
  margin-top: 0;
`;
export const CommentTitle = styled.h1`
  font-size: 24px;
  margin-top: 0;
`;
export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 50px;

  max-height: 50%;
`;
