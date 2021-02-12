import { BrowserRouter } from 'react-router-dom';

import AppProvider from './context/AppProvider';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />

        <GlobalStyles />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
