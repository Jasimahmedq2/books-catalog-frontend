/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../interfaces/books/bookInterface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPageBooks: builder.query({
      query: (data) => ({
        url: `/books/get-books?searchQuery=${data.searchQuery}&genreFilter=${data.genreFilter}&publishedYearFilter=${data.publishedYearFilter}`,
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
    bookDelete: builder.mutation({
      query: (bookId) => ({
        url: `/books/delete-book/${bookId}`,
        method: "DELETE",
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/books/create-book`,
        method: "POST",
        body: data,
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    addWishList: builder.mutation({
      query: (data) => ({
        url: `/users/wishlist/${data?.bookId}`,
        method: "POST",
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    addRedingList: builder.mutation({
      query: (data) => ({
        url: `/users/readingList/${data?.bookId}`,
        method: "POST",
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    getWishlist: builder.query({
      query: () => ({
        url: `/users/get-wishlist`,
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["books"],
    }),
    getReadingList: builder.query({
      query: () => ({
        url: `/users/get-readingList`,
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          authorization: `${localStorage.getItem("token")}`,
        },
      }),
      providesTags: ["books"],
    }),
    updateReadStatus: builder.mutation({
      query: (data) => ({
        url: `/users/update-readingStatus/${data.bookId}`,
        body: { readStatus: data.readStatus },
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
  useBookDeleteMutation,
  useCreateUserMutation,
  useAddRedingListMutation,
  useGetReadingListQuery,
  useUpdateReadStatusMutation,
  useGetWishlistQuery,
  useAddWishListMutation,
} = bookApi;
