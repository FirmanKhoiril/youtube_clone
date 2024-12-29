import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home, Search, ChannelDetail, NotFound, Shorts, History, VideoDetail, LikedVideos, WatchLater, Subscription, Trending } from "../pages";

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
          path: "/subscription",
          element: <Subscription />,
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
          path: "/feed/trending",
          element: <Trending />,
        },
        {
          path: "/feed/liked-videos",
          element: <LikedVideos />,
        },
        {
          path: "/feed/watch-later",
          element: <WatchLater />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  