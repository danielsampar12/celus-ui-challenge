import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state_management/store';
import EditCommentDialog from './EditCommentDialog';
import { commentsListMock } from 'mocks/comments.mock';

describe('EditCommentDialog', () => {
  test('don not render EditCommentDialog', () => {
    const { container } = render(
      <Provider store={store}>
        <EditCommentDialog open={false} selectedComment={commentsListMock[0]} />
      </Provider>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
