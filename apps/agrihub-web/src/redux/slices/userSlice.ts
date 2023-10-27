import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

import Cookies from "js-cookie";

export interface UserState {
  user: {
    isAuthenticated: boolean;
    userId?: string;
    email?: string;
    username?: string;
  };
}

const initialState: UserState = {
  user: {
    isAuthenticated: Boolean(Cookies.get("isAuthenticated")) ?? false,
    userId: Cookies.get("userId"),
    email: Cookies.get("email") ?? undefined,
    username: Cookies.get("username") ?? undefined
  }
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.user>
    ) => {
      Cookies.set("isAuthenticated", String(state.user.isAuthenticated));
      Cookies.set("userId", String(state.user.userId));
      Cookies.set("email", String(state.user.email));
      Cookies.set("username", String(state.user.username));

      state.user = action.payload;
    }
    // setRemoveUser: (state: Draft<typeof initialState>) => {
    //   state.user = {
    //     isAuthenticated: false,
    //     userId: undefined,
    //     email: undefined,
    //     username: undefined
    //   };
    // }
  }
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
