import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { currenciesActions } from '../../data/redux/currenciesSlice';
import { convertActions } from '../../data/redux/convertSlice';
import { walletActions } from '../../data/redux/walletSlice';
import { chartActions } from '../../data/redux/chartSlice';

const allActions = {
  ...currenciesActions,
  ...convertActions,
  ...walletActions,
  ...chartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
