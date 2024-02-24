import React from 'react';
import Videos from '../../components/Videos/Videos';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function Home() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Videos />
      </QueryClientProvider>
    </div>
  );
}

export default Home;
