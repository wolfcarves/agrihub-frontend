import { configureStore } from "@reduxjs/toolkit";

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase
} from "react-redux";

//Slices
import userSlice from "./slices/userSlice";
import questionViewSlice from "./slices/questionViewSlice";
import sidebarSlice from "./slices/sidebarSlice";
import adminSlice from "./slices/adminSlice";
import notificationSlice from "./slices/notificationSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    questionView: questionViewSlice,
    sidebar: sidebarSlice,
    admin: adminSlice,
    notification: notificationSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <T = unknown>(
  selector: (state: RootState) => T
): T => useSelectorBase<RootState, T>(selector);
