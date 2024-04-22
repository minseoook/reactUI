import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  // 여러 리듀서를 자동으로 합쳐주고 미들웨어랑 데브툴즈 기능제공한다
  reducer: {
    cart: cartReducer,
  },
});

export default store;
