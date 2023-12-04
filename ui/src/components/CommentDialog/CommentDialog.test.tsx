import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import CommentDialog from './CommentDialog';
import { commentsListMock } from 'mocks/comments.mock';

describe('CommentDialog', () => {
  test('renders CommentDialog', () => {
    render(
      <Provider store={store}>
        <CommentDialog open selectedComment={commentsListMock[0]} />
      </Provider>,
    );

    expect(screen.getByText(commentsListMock[0].text)).toBeInTheDocument();
    expect(screen.getByText(commentsListMock[0].username)).toBeInTheDocument();
  });

  test('don not render CommentDialog', () => {
    const { container } = render(
      <Provider store={store}>
        <CommentDialog open={false} selectedComment={commentsListMock[0]} />
      </Provider>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
