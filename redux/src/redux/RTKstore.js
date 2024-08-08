import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/RTKCounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
