import { apiSlice } from './apiSlice';
const USERS_URL = '/api/blog';

export const userBlogSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/create`,
        method: 'POST',
        body: data
      })
    }),
    get: builder.query({
      query: (_id) => ({
        url: `${USERS_URL}/${_id}`,
        method: 'GET',
      })
    }),
    update: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data._id}`,
        method: 'PUT',
        body: data
      })
    }),
    delete: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data._id}`,
        method: 'DELETE',
        body: data
      })
    }),
    all: builder.query({
      query: () => ({
        url: `${USERS_URL}/all`,
        method: 'GET',
      })
    }),
  })
});

export const {
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
  useGetQuery,
  useAllQuery,
} = userBlogSlice;