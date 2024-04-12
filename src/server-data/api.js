import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://devapp.bonusmoney.pro/mobileapp",
})

export const apiCards = createApi({
  reducerPath: "apiCards",
  baseQuery,
  endpoints: (builder) => ({
    getAllCardsIdeal: builder.mutation({
      query: () => ({
        url: "/getAllCompaniesIdeal",
        method: "POST",
        headers: {
          TOKEN: "123",
        },
        body:{
          offset: 0,
          limit: 5,
        },
      }),
    }),
  }),
})

export const { useGetAllCardsIdealMutation } = apiCards
