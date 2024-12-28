import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home, Search } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search/:searchTerm",
          element: <Search />,
        },
      ],
    },
  ]);
  