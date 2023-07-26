import React from 'react';

import Provider from './contexts/Provider';
import GlobalStyle from './styles/global';
import RoutesApp from './routes/RoutesApp';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Provider>
        <GlobalStyle />
        <RoutesApp />
      </Provider>
    </AuthProvider>
  );
}

export default App;
