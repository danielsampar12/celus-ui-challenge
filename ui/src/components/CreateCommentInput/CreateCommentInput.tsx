import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import { createComment, createReply } from 'state_management/actions/comments/comments.actions';

import { Container, Input, SendButton, SendText } from './styles';
import { IProps } from './IProps';
import { IComment } from 'modals/comments/Modals';

function CreateCommentInput({ isCreateReply = false }: IProps) {
  const [commentText, setCommentText] = useState('');
  const { selectedPost } = useAppSelector((state) => state.posts);
  const { user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const sendComment = () => {
    if (!selectedPost || !user) {
      throw Error(`required states must not be null [selectedPost: ${selectedPost}, user: ${user}]`);
    }

    const { name: username, image: userImage, id: userId } = user;
    const newComment: IComment = {
      id: uuidv4(),
      postId: selectedPost.id,
      text: commentText,
      userId,
      username,
      userImage,
      createAt: new Date().toISOString(),
    };
    const action = !isCreateReply
      ? createComment(newComment)
      : createReply({
          ...newComment,
          repliedToCommentId: selectedPost.id,
        });

    dispatch(action);

    setCommentText('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    return sendComment;
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        placeholder="Write your comment here..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <SendButton type="submit" onClick={sendComment}>
        <SendText>SEND</SendText>
      </SendButton>
    </Container>
  );
}

export default CreateCommentInput;
