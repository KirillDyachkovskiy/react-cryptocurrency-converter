import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { currenciesActions } from '../../data/redux/currenciesSlice';
import { walletActions } from '../../data/redux/walletSlice';
import { chartActions } from '../../data/redux/chartSlice';

const allActions = {
  ...currenciesActions,
  ...walletActions,
  ...chartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
