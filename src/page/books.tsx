/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, SubmitHandler } from "react-hook-form";
import BookCard from "../components/card";
import { useGetPageBooksQuery } from "../redux/features/books/bookApi";
import { IBook } from "../interfaces/books/bookInterface";
import { useState } from "react";

interface BookFormData {
  searchQuery: string;
  genreFilter: string;
  publishedYearFilter: string;
}

const Books = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [queryParams, setQueryParams] = useState<BookFormData | null>({
    searchQuery: "",
    genreFilter: "",
    publishedYearFilter: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>();

  const { data: booksData, isLoading } = useGetPageBooksQuery({
    params: queryParams,
  });

  if (isLoading) {
    return <p>loading...</p>;
  }

  const onSubmit: SubmitHandler<BookFormData> = (formData: BookFormData) => {
    setQueryParams(formData);
    console.log({ formData });
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">All Books</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  {...register("searchQuery")}
                  placeholder="Search by title or author"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <select
                  {...register("genreFilter")}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Genres</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="mystery">Mystery</option>
                  <option value="romance">Romance</option>
                  {/* Add more genre options here */}
                </select>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                <select
                  {...register("publishedYearFilter")}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Years</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2015">2016</option>
                  <option value="2015">2018</option>
                  <option value="2015">2019</option>
                  <option value="2015">2020</option>
                  <option value="2015">2022</option>
                  <option value="2015">2023</option>
                  {/* Add more published year options here */}
                </select>
              </div>
              <div className="w-full py-2 px-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {booksData?.data?.map((book: IBook) => (
              <BookCard key={book?._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
