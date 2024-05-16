import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILogItem } from "../../types";

type TLoggerState = {
  logArray: ILogItem[];
};
const initialState: TLoggerState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<ILogItem>) => {
      state.logArray.push(action.payload);
    },
  },
});

export const { addLog } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
