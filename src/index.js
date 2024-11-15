import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'core-js';
import App from './App';
import store from './store';
import SessionContextProvider from './contexts/SessionContext';
import { ToasterProvider } from './contexts/ToasterContext';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <SessionContextProvider>
            <ToasterProvider>
                <App />
            </ToasterProvider>
        </SessionContextProvider>
    </Provider>,
);
