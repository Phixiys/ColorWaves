import AppProvider from './AppProvider';
import App from './App';

const AppWrapper: React.FC = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default AppWrapper;
