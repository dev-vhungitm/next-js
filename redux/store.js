import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import language from './language-slice';

export const store = configureStore({
  reducer: {
    language
  }
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
