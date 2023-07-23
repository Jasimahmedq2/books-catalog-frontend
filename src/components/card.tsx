import React from "react";
import { IBook } from "../interfaces/books/bookInterface";
import { Link, useNavigate } from "react-router-dom";

interface BookCardProps {
  book: IBook;
}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const navigate = useNavigate();
  const { _id, image, title, author, publishedDate } = book;

  const handleNavigate = (id: string) => {
    navigate(`/book/${id}`);
  };

  return (
    <div
      onClick={() => handleNavigate(_id)}
      className="relative w-64 h-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={() => handleNavigate(_id)}
            className="bg-black border border-white hover:bg-black-600 text-white py-2 px-4 rounded"
          >
            expand the book
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {title.length > 15 ? title.slice(0, 15) + "..." : title}
        </h3>
        <p className="text-gray-600 mb-2">Author: {author}</p>
        <p className="text-gray-600">
          PublishedDate: {publishedDate.slice(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
