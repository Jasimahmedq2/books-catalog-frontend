/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useGetSingleBookQuery,
} from "../redux/features/books/bookApi";
import { SubmitHandler, useForm } from "react-hook-form";

interface IReviews {
  review: string;
}

const BooksDetails = () => {
  const { bookId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviews>();
  const [loginUser] = useAddReviewMutation();

  const onSubmit: SubmitHandler<IReviews> = async (data) => {
    const reviewOption = {
      bookId: bookId,
      text: data.review,
    };
    console.log({ reviewOption });
    await loginUser(reviewOption);
    reset();
  };

  const { data: bookData, isLoading } = useGetSingleBookQuery(bookId);

  if (isLoading) {
    return <p>loading...</p>;
  }

  const { image, author, publishedDate, title, reviews } = bookData?.data;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={image}
                alt="Book Cover"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600 mb-4">{author}</p>
              <p className="text-gray-600 mb-4">
                Published Date: {publishedDate?.slice(0, 4)}
              </p>
              <p className="text-gray-800">{title}</p>
              <div className="mt-6">
                <Link
                  to={`/book/edit/${bookId}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  edit book
                </Link>
                <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  delete book
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 px-6 py-4">
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            <div>
              {reviews?.map((review: any) => (
                <div className="flex items-center mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Reviewer Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">
                      {review?.user?.name?.firstName +
                        " " +
                        review?.user?.name?.lastName}
                    </p>
                    <p className="text-gray-600">{review?.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              <label
                className="block mb-2 font-medium text-gray-800"
                htmlFor="review"
              >
                Write a review
              </label>
              <textarea
                id="review"
                {...register("review", { required: true })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </form>
            {/* {submittedReview && (
              <div className="mt-4">
                <p className="text-gray-800 font-medium">Your Review:</p>
                <p className="text-gray-600"></p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
