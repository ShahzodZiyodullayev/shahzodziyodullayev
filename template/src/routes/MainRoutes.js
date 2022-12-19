import { lazy } from "react";

import MainLayout from "../layouts/MainLayout";
import Loadable from "../components/Loadable";

const Home = Loadable(lazy(() => import("../pages/Home/Home")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
