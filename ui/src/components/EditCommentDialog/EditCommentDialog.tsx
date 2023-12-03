import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton } from '@mui/material';

import { useAppDispatch } from 'state_management/hooks';
import { closeEditCommentDialog, deleteComment, editComment } from 'state_management/actions/comments/comments.actions';

import { IProps } from './IProps';

import {
  ButtonsContainer,
  EditCommentDialogContainer,
  EditCommentDialogContent,
  EditCommentDialogHeader,
  EditCommentInput,
  Title,
} from './styles';

import Button from 'components/Button';

export function EditCommentDialog({ open, selectedComment }: IProps) {
  const [text, setText] = useState(selectedComment.text);

  const dispatch = useAppDispatch();
  const handleClose = (): void => {
    dispatch(closeEditCommentDialog());
  };

  const handleSubmitEdtion = (): void => {
    dispatch(editComment(selectedComment.id, text));

    handleClose();
  };

  const handleDeleteComment = () => {
    dispatch(deleteComment(selectedComment.id));

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
      <EditCommentDialogContainer>
        <EditCommentDialogHeader>
          <Title>Edit your comment</Title>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </EditCommentDialogHeader>

        <EditCommentDialogContent>
          <EditCommentInput value={text} onChange={(e) => setText(e.target.value)} />
          <ButtonsContainer>
            <Button text="Delete comment" variant="outline" onClick={handleDeleteComment} />
            <Button text="Save" variant="filled" onClick={handleSubmitEdtion} />
          </ButtonsContainer>
        </EditCommentDialogContent>
      </EditCommentDialogContainer>
    </Dialog>
  );
}
