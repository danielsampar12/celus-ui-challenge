import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import { selectedPost } from 'mocks/posts.mock';
import { PostDialog } from './PostDialog';
describe('Post Dialog', () => {
  test('renders Post Dialog when open is true', () => {
    const renderedScreen = render(
      <Provider store={store}>
        <PostDialog open selectedPost={selectedPost} />
      </Provider>,
    );
    expect(renderedScreen.getByText(`${selectedPost.title}`)).toBeInTheDocument();
  });

  test('doesnt renders Post Dialog when open is false', () => {
    const renderedScreen = render(
      <Provider store={store}>
        <PostDialog open={false} selectedPost={selectedPost} />
      </Provider>,
    );
    expect(renderedScreen.queryByText(`${selectedPost.title}`)).toBeNull();
  });

  test('render title and description', () => {
    const renderedScreen = render(
      <Provider store={store}>
        <PostDialog open selectedPost={selectedPost} />
      </Provider>,
    );
    expect(renderedScreen.getByText(selectedPost.title)).toBeInTheDocument();
    expect(renderedScreen.getByText(selectedPost.body)).toBeInTheDocument();
  });
});
