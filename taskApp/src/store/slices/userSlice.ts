import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TUserState = {
  email: string;
  id: string;
};

type TLoginAction = {
  email: string;
  id: string;
};

const initialState: TUserState = {
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TLoginAction>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    logout: (state) => {
      state.email = "";
      state.id = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
