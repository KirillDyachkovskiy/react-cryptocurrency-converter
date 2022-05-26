import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { currentActions } from '../../data/redux/currentSlice';
import { chartActions } from '../../data/redux/chartSlice';
import { walletActions } from '../../data/redux/walletSlice';

const allActions = {
  ...currentActions,
  ...chartActions,
  ...walletActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
