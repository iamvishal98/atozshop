import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/globalStyles.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Auth0Provider } from "@auth0/auth0-react";

let persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN_ID}
    clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </Auth0Provider>


)
