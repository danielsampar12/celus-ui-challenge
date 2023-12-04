import { render, screen } from '@testing-library/react';
import Header from './Header';
import { store } from 'state_management/store';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
test('renders Header', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header logo="/logo.png" />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByText(/Travel Blog/i)).toBeInTheDocument();
});
