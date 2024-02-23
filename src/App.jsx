import { Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
