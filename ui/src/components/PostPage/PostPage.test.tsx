import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import PostPage from './PostPage';
import { selectedPost } from 'mocks/posts.mock';

describe('PostPage', () => {
  test('renders PostPage', () => {
    render(
      <Provider store={store}>
        <PostPage key={selectedPost.id} post={selectedPost} />
      </Provider>,
    );
    expect(screen.getByText(selectedPost.title)).toBeInTheDocument();
    expect(screen.getByText(selectedPost.body)).toBeInTheDocument();
  });
});
