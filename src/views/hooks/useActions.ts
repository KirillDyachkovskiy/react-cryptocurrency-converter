import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { dashboardActions } from '../../data/redux/dashboardSlice';
import { chartActions } from '../../data/redux/chartSlice';

const allActions = {
  ...dashboardActions,
  ...chartActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
