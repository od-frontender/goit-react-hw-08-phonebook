import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],

  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),
    createContact: builder.mutation({
      query({ name, number }) {
        return {
          url: "/contacts",
          method: "POST",
          body: {
            name,
            number,
          },
        };
      },
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query(contactId) {
        return {
          url: `contacts/${contactId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactApi;
