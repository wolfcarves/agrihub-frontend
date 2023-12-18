import { createSlice } from "@reduxjs/toolkit";
import { UserSchema } from "../../api/openapi";

type UserState = {
  user: UserSchema;
};

const initialState: UserState = {
  user: {
    id: "",
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    present_address: "",
    avatar: "",
    zipcode: "",
    district: "",
    municipality: "",
    verification_level: "",
    role: "",
    createdat: "",
    updatedat: ""
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export const getUserState = (state: { user: UserState }) => state.user.user;

export default userSlice.reducer;
