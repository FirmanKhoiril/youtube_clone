import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home, Search, ChannelDetail, NotFound, Shorts, History, VideoDetail } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/video/:id",
          element: <VideoDetail />,
        },
        {
          path: "/search/:searchTerm",
          element: <Search />,
        },
        {
          path: "/shorts",
          element: <Shorts />,
        },
        {
          path: "/channel/:id",
          element: <ChannelDetail />,
        },
        {
          path: "/feed/history",
          element: <History />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  