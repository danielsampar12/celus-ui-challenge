import { Dialog, IconButton } from '@mui/material';
import { IProps } from './IProps';
import { useAppDispatch } from 'state_management/hooks';

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

function CommentDialog({ open, selectedComment }: IProps) {
  const { userImage, text, username, replies, id } = selectedComment;
  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(unselectComment());
  };
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
            <UserImage alt="User icon" src={userImage} />
            <UserName>{username}</UserName>
          </ImageAndNameContainer>

          <CommentText>{text}</CommentText>
        </CommentDialogContent>
        <CommentsSection>
          <RepliesList replies={replies} replyToCommentId={id} />
        </CommentsSection>
      </CommentDialogContainer>
    </Dialog>
  );
}

export default CommentDialog;
