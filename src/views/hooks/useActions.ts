import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { currentActions } from '../../data/redux/currentSlice';

const allActions = {
  ...currentActions,
};

export default function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
}
