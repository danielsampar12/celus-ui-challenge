import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Header from 'components/Header';
import Notification from 'components/Notification/Notification';
import { useAppDispatch, useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import { useSelector } from 'react-redux';
import PostPage from 'components/PostPage';
import { useEffect } from 'react';
import { getCurrentUser } from 'state_management/actions/users/users.actions';
import { EditCommentDialog } from 'components/EditCommentDialog/EditCommentDialog';

function App() {
  const { selectedPost, postsList } = useAppSelector((state: AppState) => state.posts);
  const { selectedComment, isEditing } = useAppSelector((state: AppState) => state.comments);
  const { open, message } = useSelector((state: any) => {
    return state.notification;
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <Header logo="/logo.png" />
      <Routes>
        <Route index element={<Home postsList={postsList} />} />
        <Route path="/post/:id" element={<PostPage post={selectedPost} />} />
      </Routes>
      <Notification open={open} message={message} />
      {selectedComment && isEditing ? <EditCommentDialog open selectedComment={selectedComment} /> : <></>}
    </>
  );
}

export default App;
