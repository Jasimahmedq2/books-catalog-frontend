/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IBook } from "../interfaces/books/bookInterface";
import { useGetAllBooksQuery } from "../redux/features/books/bookApi";
import BookCard from "./card";

const RecentBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold py-4">
        Recent published books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.data?.slice(0, 10).map((book: IBook) => (
          <BookCard book={book} key={book?._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;
