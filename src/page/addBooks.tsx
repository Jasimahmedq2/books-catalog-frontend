/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useForm, SubmitHandler } from "react-hook-form";
import { IBook } from "../interfaces/books/bookInterface";
import { useCreateUserMutation } from "../redux/features/books/bookApi";
import { toast } from "react-toastify";

interface BookFormData {
  image: string;
  author: string;
  genre: string;
  publishedDate: string;
  title: string;
}

const AddBookPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>();

  const [createUser, { isSuccess }] = useCreateUserMutation();

  const onSubmit: SubmitHandler<BookFormData> = (data) => {
    const privateUrl = "44c26384eae4023f6064cf342eee9294";
    const formData = new FormData();
    formData.append("image", data?.image[0]);

    fetch(`https://api.imgbb.com/1/upload?key=${privateUrl}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const bookOptions = {
          image: result?.data?.url,
          author: data.author,
          publishedDate: data.publishedDate,
          title: data.title,
          genre: data.genre,
        };
        createUser(bookOptions);
        if (isSuccess) {
          toast.success("successfully crated a book");
        }
      });
    reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">Add New Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block mb-2 font-medium text-gray-800"
                >
                  Image URL
                </label>
                <input
                  id="image"
                  type="file"
                  {...register("image", { required: true })}
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
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
