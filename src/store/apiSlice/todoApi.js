import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: ({ pageStart = 0, pageSize = 10 }) =>
        `todos?_start=${pageStart}&_limit=${pageSize}`,
    }),
    addTodos: builder.mutation({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = todoApi;
