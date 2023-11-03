import { configureStore } from "@reduxjs/toolkit";

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase
} from "react-redux";

//Slices
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <T = unknown>(
  selector: (state: RootState) => T
): T => useSelectorBase<RootState, T>(selector);
