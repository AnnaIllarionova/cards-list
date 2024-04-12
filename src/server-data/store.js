import { configureStore } from "@reduxjs/toolkit"
import { apiCards } from "./api"

export const store = configureStore({
  reducer: {
    [apiCards.reducerPath]: apiCards.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCards.middleware),
})
