import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

// it('renders without crashing', () => {
//   render(<App />)
// });

test('Contains Dashboad', () => {
  const { getByTest } = render(<Dashboard/>)
  getByTest(/hits/i)
})