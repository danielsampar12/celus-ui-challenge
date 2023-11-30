import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './posts/posts.reducer';
import commentsReducer from './comments/comments.reducer';
import notificationReducer from './notification/notification.reducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  notification: notificationReducer,
});
