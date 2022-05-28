import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../../data/redux/dashboardSlice';
import { walletActions } from '../../data/redux/walletSlice';
import { chartActions } from '../../data/redux/chartSlice';

const allActions = {
  ...dashboardActions,
  ...walletActions,
  ...chartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
