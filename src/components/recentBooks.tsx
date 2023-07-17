import BookCard from "./card";

const dummyBooks = [
  {
    _id: "1",
    image:
      "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
    author: "jasim ahmed",
    genre: "fantasy",
    publishedDate: "02-04-2014",
    title: "the book title",
  },
  {
    _id: "2",
    image:
      "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
    author: "jasim ahmed",
    genre: "fantasy",
    publishedDate: "02-04-2014",
    title: "the book title",
  },
  {
    _id: "3",
    image:
      "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
    author: "jasim ahmed",
    genre: "fantasy",
    publishedDate: "02-04-2014",
    title: "the book title",
  },
  {
    _id: "4",
    image:
      "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000",
    author: "jasim ahmed",
    genre: "fantasy",
    publishedDate: "02-04-2014",
    title: "the book title",
  },
];

const RecentBooks = () => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold py-4">
        Recent published books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5">
        {dummyBooks?.slice(0, 10).map((book) => (
          <BookCard book={book} key={book?._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentBooks;
