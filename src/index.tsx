import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { DetailsContextProvider } from './context/DetailsContext';
import { App } from './App';
import { store } from './store';

import './globals.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <DetailsContextProvider>
          <App />
        </DetailsContextProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
