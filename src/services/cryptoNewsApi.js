import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-access-token': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const cryptoNewsApiHeaders = {
//   'x-bingapis-sdk': 'true',
//   'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//   'x-rapidapi-key': '0b3f25fea9msh9026fac0efe99c2p15d521jsn3a557fd90e02'
// }
// const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
// const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})
//
// export const cryptoNewsApi = createApi({
//   reducerPath: 'cryptoNewsApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptoNews: builder.query({
//       query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
//     })
//   })
// })
//
// export const { useGetCryptoNewsQuery } = cryptoNewsApi