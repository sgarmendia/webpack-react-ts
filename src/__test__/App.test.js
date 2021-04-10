import React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../components/App';

afterEach(cleanup);

describe('App', () => {
  const { getByRole } = render(<App />);

  it('renders the title', () => {
    const title = getByRole('heading');
    expect(title).toHaveTextContent('Welcome to Webpack React Boilerplate');
  });
});