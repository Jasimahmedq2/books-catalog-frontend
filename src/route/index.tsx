import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../page/home";
import Books from "../page/books";
import Login from "../page/login";
import Register from "../page/register";
import NotFoundPage from "../page/notFound";
import BooksDetails from "../page/bookDetails";
import EditPage from "../page/editePage";
import AddBookPage from "../page/addBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/book", element: <Books /> },
      { path: "/book/addBook", element: <AddBookPage /> },
      { path: "/book/:bookId", element: <BooksDetails /> },
      { path: "/book/edit/:bookId", element: <EditPage /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
