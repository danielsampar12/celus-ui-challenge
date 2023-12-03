import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/posts.reducer';
import commentsReducer from './comments/comments.reducer';
import notificationReducer from './notification/notification.reducer';
import usersReducer from './users/users.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  notification: notificationReducer,
});
