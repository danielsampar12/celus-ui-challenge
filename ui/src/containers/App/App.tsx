import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/Home/Home';
import Header from 'components/Header/Header';
import Notification from 'components/Notification/Notification';
import { useAppSelector } from 'state_management/hooks';
import { AppState } from 'state_management/store';
import { useSelector } from 'react-redux';
import PostPage from 'components/PostPage';

const App = (): JSX.Element => {
  const { selectedPost, postsList } = useAppSelector((state: AppState) => state.posts);
  const { open, message } = useSelector((state: any) => {
    return state.notification;
  });

  return (
    <>
      <Header logo="/logo.png" />
      <Routes>
        <Route index element={<Home postsList={postsList} />} />
        <Route path="/post/:id" element={<PostPage post={selectedPost} />} />
      </Routes>
      <Notification open={open} message={message} />
    </>
  );
};

export default App;
