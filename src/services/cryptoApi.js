import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  "x-access-token": "coinranking9c2f9aad9dce24d86f691a951346eb95081cad484343bfb4",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const queryString = new URLSearchParams({
  'x-access-token': "coinranking9c2f9aad9dce24d86f691a951346eb95081cad484343bfb4",
  search: 'Bit',
});
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}&${queryString}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;