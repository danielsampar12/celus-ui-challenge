import { formatDistanceToNow } from 'utils/formatDistanceToNow';
import { IProps } from './IProps';
import {
  Container,
  Footer,
  Header,
  UnstyledButton,
  ReplyText,
  Text,
  Time,
  UserImage,
  UserName,
  ButtonsContainer,
} from './styles';
import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteComment, openEditCommentDialog } from 'state_management/actions/comments/comments.actions';
import React from 'react';

function Comment({ comment }: IProps) {
  const { user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleEditComment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    dispatch(openEditCommentDialog(comment));
  };

  const handleDeleteComment = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    dispatch(deleteComment(comment.id));
  };

  return (
    <Container onClick={() => console.log('ai tio tira')}>
      <Header>
        <UserImage alt="User icon" src={comment.userImage} />
        <UserName>{comment.username}</UserName>
      </Header>

      <Text>{comment.text}</Text>

      <Footer>
        <Time>{formatDistanceToNow(comment.createAt)}</Time>

        {comment.userId === user?.id ? (
          <ButtonsContainer>
            <UnstyledButton onClick={handleEditComment}>
              <EditOutlinedIcon />
            </UnstyledButton>

            <UnstyledButton onClick={handleDeleteComment}>
              <DeleteOutlineOutlinedIcon />
            </UnstyledButton>
          </ButtonsContainer>
        ) : (
          <UnstyledButton
            onClick={() => {
              console.log('hi');
            }}
          >
            <ReplyText>REPLY</ReplyText>
          </UnstyledButton>
        )}
      </Footer>
    </Container>
  );
}

export default Comment;
