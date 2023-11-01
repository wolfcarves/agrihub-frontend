import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    role: string;
    username: string;
  };
}

const initialState: UserState = {
  user: {
    role: "",
    username: ""
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
      state.user = action.payload;
    }
  }
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
