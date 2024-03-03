import { Outlet, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import HistoryPage from "../pages/HistoryPage";
import ErrorPage from "../pages/ErrorPage";

const route: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default route;
