import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./apiSlice/todoApi";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    // add reducers here
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
