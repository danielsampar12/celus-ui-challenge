import { render, screen } from '@testing-library/react';
import Home from './Home';
import { postsListMock } from 'mocks/posts.mock';
import { store } from 'state_management/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
  test('renders Home', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home postsList={postsListMock} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(`${postsListMock[0].title}`)).toBeInTheDocument();
  });

  test('renders Home with no posts', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home postsList={[]} />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText(/No Posts were found/i)).toBeInTheDocument();
  });

  test('renders Home expected posts', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home postsList={postsListMock} />
        </BrowserRouter>
      </Provider>,
    );
    const renderedPosts = await screen.findAllByTestId(`post-test-id`);
    expect(renderedPosts).toHaveLength(postsListMock.length);
  });
});
