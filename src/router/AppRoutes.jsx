import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import RootLayout from "@/components/layout/rootLayout/rootLayout.component";
import Home from "@/pages/home/home.page";
import About from "@/pages/about/about.page";
import NotFound from "@/pages/notFound/notFound.page";
import Unauthorized from "@/pages/unauthorized/unauthorized.page";
import ServerError from "@/pages/serverError/serverError.page";

const AppRoutes = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/notFound",
      element: <NotFound />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "/serverError",
      element: <ServerError />,
    },
    {
      path: "*",
      element: <Navigate to="/notFound" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
