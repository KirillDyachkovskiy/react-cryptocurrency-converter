import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../../data/redux';

const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export default useAppSelector;
