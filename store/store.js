const { configureStore } = require("@reduxjs/toolkit");
import toggleReducer from "./slices/toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});
export default store;
