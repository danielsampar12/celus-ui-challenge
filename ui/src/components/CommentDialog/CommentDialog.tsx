import { Dialog, IconButton } from '@mui/material';
import { IProps } from './IProps';
import { useAppDispatch, useAppSelector } from 'state_management/hooks';

import CloseIcon from '@mui/icons-material/Close';
import {
  CommentDialogContainer,
  CommentDialogContent,
  CommentDialogHeader,
  CommentText,
  CommentsSection,
  ImageAndNameContainer,
  UserImage,
  UserName,
} from './styles';
import { unselectComment } from 'state_management/actions/comments/comments.actions';

import RepliesList from 'components/RepliesList';
import { AppState } from 'state_management/store';

function CommentDialog({ open }: IProps) {
  const { selectedComment } = useAppSelector((state: AppState) => state.comments);

  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(unselectComment());
  };

  if (!selectedComment) {
    return <></>;
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
      <CommentDialogContainer>
        <CommentDialogHeader>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </CommentDialogHeader>
        <CommentDialogContent>
          <ImageAndNameContainer>
            <UserImage alt="User icon" src={selectedComment.userImage} />
            <UserName>{selectedComment.username}</UserName>
          </ImageAndNameContainer>

          <CommentText>{selectedComment.text}</CommentText>
        </CommentDialogContent>
        <CommentsSection>
          <RepliesList selectedComment={selectedComment} />
        </CommentsSection>
      </CommentDialogContainer>
    </Dialog>
  );
}

export default CommentDialog;
