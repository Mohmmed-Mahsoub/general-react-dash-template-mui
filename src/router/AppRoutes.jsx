import { RouterProvider, Navigate, createHashRouter } from "react-router-dom";
import RootLayout from "@/components/layout/rootLayout/rootLayout.component";
import Home from "@/pages/home/home.page";
import About from "@/pages/about/about.page";
import NotFound from "@/pages/notFound/notFound.page";
import Unauthorized from "@/pages/unauthorized/unauthorized.page";
import ServerError from "@/pages/serverError/serverError.page";
import { protectRoute } from "@/helpers/utilities/protectRoute";
import useGetCurrentUserQueryExtend from "@/helpers/customHooks/useGetCurrentUserQueryExtend";

const AppRoutes = () => {
  /* const { isUnauthorized, loading } = useSelector((state) => state.user); */
  const { userData, error, isLoading, isUnauthorized } =
    useGetCurrentUserQueryExtend();

  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          path: "",
          element: <Home />,
          loader: () => protectRoute(isLoading, error, "home", isUnauthorized),
        },
        {
          path: "about",
          element: <About />,
          loader: () => protectRoute(isLoading, error, "about", isUnauthorized),
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
      loader: () =>
        protectRoute(isLoading, error, "unauthorized", isUnauthorized),
    },
    {
      path: "/serverError",
      element: <ServerError />,
      loader: () =>
        protectRoute(isLoading, error, "serverError", isUnauthorized),
    },
    {
      path: "*",
      element: <Navigate to="/notFound" />,
    },
  ]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">loading</div>
    );
  } else {
    return <RouterProvider router={router} />;
  }
};

export default AppRoutes;
