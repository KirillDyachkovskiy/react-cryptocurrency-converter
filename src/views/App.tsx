import { useCallback, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TCoinId } from '../data/types';

import { useGetDataQuery } from '../data/redux/cryptoAPI';
import { useActions } from './hooks';

import { MainLayout } from './layouts';
import { Dashboard, Notfound, Wallet } from './pages';

function App() {
  const {
    data: bitcoin,
    refetch: refetchBTC,
    isFetching: isBTCFetching,
  } = useGetDataQuery({
    id: TCoinId.btc,
  });
  const {
    data: ethereum,
    refetch: refetchETH,
    isFetching: isETHFetching,
  } = useGetDataQuery({
    id: TCoinId.eth,
  });
  const { setData } = useActions();

  const isFetching = isBTCFetching || isETHFetching;

  const refetch = useCallback(() => {
    refetchBTC();
    refetchETH();
  }, [refetchBTC, refetchETH]);

  useEffect(() => {
    if (bitcoin) {
      setData(bitcoin);
    }
    if (ethereum) {
      setData(ethereum);
    }
  }, [bitcoin, ethereum, setData]);

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='*' element={<Navigate to='/not-found' />} />
        <Route
          index
          element={<Dashboard isFetching={isFetching} refetch={refetch} />}
        />
        <Route path='wallet' element={<Wallet />} />
        <Route path='not-found' element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default App;
