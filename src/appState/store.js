import { configureStore } from "@reduxjs/toolkit";
/* import userSlice from "./slices/userSlice"; */
import homeSlice from "./slices/homeSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userSlice.reducerPath]: userSlice.reducer,
    home: homeSlice,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware),
});

export default store;
