import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { DetailsContextProvider } from './context/DetailsContext';
import App from './App';
import { store } from './store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DetailsContextProvider>
        <App />
      </DetailsContextProvider>
    </Provider>
  </React.StrictMode>
);
