import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import sidebarReducer from './sidebarSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sidebar: sidebarReducer,
  },
});

// Define RootState type for useSelector
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for useDispatch
export type AppDispatch = typeof store.dispatch;
