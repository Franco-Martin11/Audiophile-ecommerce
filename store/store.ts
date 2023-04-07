import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices/rootReducer";

const store = configureStore({
  reducer: { user: rootReducer.reducer },
});

export default store;
