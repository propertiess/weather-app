import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import {DetailsState} from "./context/DetailsContext";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <DetailsState>
            <App />
        </DetailsState>
    </Provider>
  // </React.StrictMode>
);

