/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../interfaces/books/bookInterface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPageBooks: builder.query({
      query: (params) => ({
        url: "/books/get-books",
        params: params,
      }),
      providesTags: ["books"],
    }),
    getAllBooks: builder.query({
      query: () => ({
        url: "/books/get-books",
      }),
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (bookId) => ({
        url: `/books/get-book/${bookId}`,
      }),
      providesTags: ["books"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: `/books/book-review/${data?.bookId}`,
        method: "POST",
        body: { text: data?.text },
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: ({ updatedData, bookId }) => ({
        url: `/books/edit-book/${bookId}`,
        method: "PATCH",
        body: updatedData,
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetPageBooksQuery,
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useAddReviewMutation,
  useEditBookMutation,
} = bookApi;
