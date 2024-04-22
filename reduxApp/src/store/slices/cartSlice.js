import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  //슬라이스 이름, 초기값, 리듀서로 이루어진 객체
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //여기가 액션
      console.log(action);
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; //액션을 내보내줘야지 dispatch가 가능하다

export default cartSlice.reducer; //컨피규어스토어에서 합치기 위해
