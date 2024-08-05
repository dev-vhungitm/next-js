'use client';

import { store } from '@/redux';
import { Provider } from 'react-redux';

export const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
