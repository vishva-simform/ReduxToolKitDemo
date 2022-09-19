import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {InitialStateType} from '../Counter';

export const initialState: InitialStateType = {value: 0};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: InitialStateType, action: PayloadAction<number>) => {
      state.value += Number(action?.payload);
    },
    decrement: (state: InitialStateType, action: PayloadAction<number>) => {
      state.value -= Number(action?.payload);
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
