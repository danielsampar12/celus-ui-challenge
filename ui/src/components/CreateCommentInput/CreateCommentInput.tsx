import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import { createComment } from 'state_management/actions/comments/comments.actions';

import { Container, Input, SendButton, SendText } from './styles';

function CreateCommentInput() {
  const [commentText, setCommentText] = useState('');
  const { selectedPost } = useAppSelector((state) => state.posts);
  const { user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const sendComment = () => {
    if (!selectedPost || !user) {
      throw Error(`required states must not be null [selectedPost: ${selectedPost}, user: ${user}]`);
    }

    const { name: username, image: userImage, id: userId } = user;

    dispatch(
      createComment({
        id: uuidv4(),
        postId: selectedPost.id,
        text: commentText,
        userId,
        username,
        userImage,
        createAt: new Date().toISOString(),
      }),
    );

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
