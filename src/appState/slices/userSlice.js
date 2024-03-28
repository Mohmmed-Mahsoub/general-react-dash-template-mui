import { BASEURLS } from "@/api/baseUrls";
import { ProxyURL, requestHeaders } from "@/api/constants";
import { ENDPOINTS } from "@/api/endPoints";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
  reducerPath: "currentUser",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ProxyURL}${BASEURLS.forSharePointAPIs}`,
  }),
  tagTypes: ["currentUser"],
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: ENDPOINTS.user.get_current_user,
        headers: requestHeaders,
        responseHandler: (response) => response.json(),
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery } = userSlice;
