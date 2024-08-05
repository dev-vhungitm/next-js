'use client';

import { createSlice } from '@reduxjs/toolkit';
const initialState = (typeof window != 'undefined' && localStorage.getItem('language')) || 'vi';

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (_, action) => {
      return action.payload;
    }
  }
});

export const languageActions = languageSlice.actions;
export const selectLanguage = state => state.language;
const language = languageSlice.reducer;
export default language;
