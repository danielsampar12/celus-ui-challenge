import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import { createComment } from 'state_management/actions/comments/comments.actions';

import { Container, Input, SendButton, SendText } from './styles';

function CreateCommentInput() {
  const [commentText, setCommentText] = useState('');
  const { selectedPost } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const sendComment = () => {
    if (!selectedPost) throw Error('Selected post state is null');

    dispatch(
      createComment({
        id: uuidv4(),
        postId: selectedPost.id,
        createAt: new Date().toISOString(),
        username: 'Maruxa Metrophanes',
        text: commentText,
        userId: 'A0539F58-9CEF-421F-A258-72E1F40D4EB4',
        userImage:
          'https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfALfSeYdgoAKSKN4fs8iNr4H1QQ0hdeqZn1SNWNVd3Z7w&oe=6572B58F&_nc_sid=ee9879 1080w,https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfDsuWaemjrgdA8b-x2oHNT4xPQTf0ls_LAiDv3J54HgkA&oe=6572B58F&_nc_sid=ee9879 720w,https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfC5K4px2LukThr7t1fBLeTiJr_FvL4FD4mnf9OiAU0c0A&oe=6572B58F&_nc_sid=ee9879 640w,https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p480x480&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfCVE16XboRV-44XzbmOE85_IFl-UfqzdoR2Rt8tC2lx1Q&oe=6572B58F&_nc_sid=ee9879 480w,https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfBGR847pLIlcJ4f8us6slzRomJgiZCB3MR9QtGEGd0eQQ&oe=6572B58F&_nc_sid=ee9879 320w,https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/334792089_762153631795772_7539439952372757332_n.jpg?stp=dst-jpg_e35_p240x240&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=p4jfFBd5bfEAX9fxEUw&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA1NzIyMDI5MzExNDA5MTYyNA%3D%3D.2-ccb7-5&oh=00_AfB7JZ3FxuSVu6LpvRtvr_uMt7PVK1Hs108FBuCvFq-NrQ&oe=6572B58F&_nc_sid=ee9879',
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
