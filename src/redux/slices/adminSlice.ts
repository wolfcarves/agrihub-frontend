import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  email: string;
  password: string;
}

const initialState: AdminState = {
  email: "",
  password: ""
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  }
});

export const { setEmail, setPassword } = adminSlice.actions;

export default adminSlice.reducer;
