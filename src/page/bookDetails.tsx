/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link, useParams } from "react-router-dom";

const BooksDetails = () => {
  const { bookId } = useParams();
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?w=2000"
                alt="Book Cover"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h2 className="text-3xl font-bold mb-4">The Book Title</h2>
              <p className="text-gray-600 mb-4">By Author Name</p>
              <p className="text-gray-600 mb-4">Published Date: 02-04-2014</p>
              <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia, turpis vel consequat tempus, tortor odio dapibus metus,
                id lacinia lorem turpis vel erat. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Integer venenatis lacus et ipsum rhoncus, vel venenatis
                nisi tincidunt. Nulla facilisi. Morbi eget elit lectus. Donec
                aliquam ante vitae dapibus aliquet. Nulla a justo eleifend,
                sodales diam in, consequat neque. Sed dictum mi nec neque
                laoreet semper. Cras vulputate lectus et arcu consectetur, vel
                auctor mauris elementum. Mauris vehicula nisi ut tellus iaculis,
                sed fermentum velit pulvinar.
              </p>
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
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Reviewer Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="text-gray-800 font-medium">John Doe</p>
                <p className="text-gray-600">
                  Excellent book! Highly recommended.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="Reviewer Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <p className="text-gray-800 font-medium">Jane Smith</p>
                <p className="text-gray-600">
                  Great read. Couldn't put it down!
                </p>
              </div>
            </div>
            <form className="mt-4">
              <label
                className="block mb-2 font-medium text-gray-800"
                htmlFor="review"
              >
                Write a review
              </label>
              <textarea
                id="review"
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
