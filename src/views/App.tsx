import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { Dashboard, Notfound, Wallet } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='*' element={<Navigate to='/not-found' />} />
        <Route index element={<Dashboard />} />
        <Route path='wallet' element={<Wallet />} />
        <Route path='not-found' element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
