import { redirect } from "react-router-dom";

export const protectRoute = (loading, error, currPage, isUnauthorized) => {
  if (!loading) {
    if (error && currPage !== "serverError") {
      console.log("error", error);
      return redirect("/serverError"); // Redirect to server error page
    }

    if (!error && isUnauthorized && currPage !== "unauthorized") {
      return redirect("/unauthorized"); // Redirect to unauthorized page
    }

    if (
      !error &&
      !isUnauthorized &&
      ["serverError", "unauthorized"].includes(currPage)
    ) {
      return redirect("/"); // Redirect to home page
    }
  }

  return null; // No redirection needed
};
