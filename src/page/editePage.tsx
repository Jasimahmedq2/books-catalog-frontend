/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/books/bookApi";
import { useEffect } from "react";

interface BookFormData {
  title: string;
  author: string;
  publishedDate: string;
  genre: string;
}

const EditPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  const navigate = useNavigate();

  const { bookId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<BookFormData>();

  const [editBook, { isSuccess: editSuccess }] = useEditBookMutation();
  const { data: bookData, isLoading } = useGetSingleBookQuery(bookId);

  if (isLoading) {
    return <p>Loading</p>;
  }
  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    const editOptions = {
      updatedData: {
        title: data.title,
        author: data.author,
        publishedDate: data.publishedDate,
        genre: data.genre,
      },
      bookId,
    };
    console.log(editOptions);
    editBook(editOptions);

    navigate(`/book/${bookId}`);

    reset();
  };

  const currentBook = {
    title: bookData?.data?.title,
    author: bookData?.data?.author,
    publishedDate: bookData?.data?.publishedDate,
    genre: bookData?.data?.genre,
  };

  useEffect(() => {
    setValue("title", currentBook.title);
    setValue("author", currentBook.author);
    setValue("publishedDate", currentBook.publishedDate);
    setValue("genre", currentBook.genre);
  }, [currentBook, setValue]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Edit Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block mb-2 font-medium text-gray-800"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("title", { required: true })}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block mb-2 font-medium text-gray-800"
                >
                  Author
                </label>
                <input
                  id="author"
                  type="text"
                  {...register("author", { required: true })}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="publishedDate"
                  className="block mb-2 font-medium text-gray-800"
                >
                  Published Date
                </label>
                <input
                  id="publishedDate"
                  type="text"
                  {...register("publishedDate", { required: true })}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="genre"
                  className="block mb-2 font-medium text-gray-800"
                >
                  Genre
                </label>
                <input
                  id="genre"
                  type="text"
                  {...register("genre", { required: true })}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
