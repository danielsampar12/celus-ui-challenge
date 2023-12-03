import { useAppDispatch } from 'state_management/hooks';
import { IProps } from './IProps';
import { closeEditCommentDialog, editComment } from 'state_management/actions/comments/comments.actions';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  ButtonsContainer,
  EditCommentDialogContainer,
  EditCommentDialogContent,
  EditCommentDialogHeader,
  EditCommentInput,
  Title,
} from './styles';
import { useState } from 'react';
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
            <Button text="Delete comment" variant="outline" />
            <Button text="Save" variant="filled" onClick={handleSubmitEdtion} />
          </ButtonsContainer>
        </EditCommentDialogContent>
      </EditCommentDialogContainer>
    </Dialog>
  );
}
