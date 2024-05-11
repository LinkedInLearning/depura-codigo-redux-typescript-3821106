import { configureStore } from '@reduxjs/toolkit';
import productoReducer from '../reducers/productoReducer';

export const store = configureStore({
  reducer: {
    productos: productoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
