import { useGetCurrentUserQuery } from "@/appState/slices/userSlice";

function useGetCurrentUserQueryExtend() {
  const {
    data: userData,
    error,
    isLoading,
    isFetching,
  } = useGetCurrentUserQuery("bulbasaur");
  // Custom loading state
  const loadingState = isLoading || isFetching;

  // Custom unauthorized state
  const isUnauthorized = !userData?.d?.IsSiteAdmin;

  // Custom error state
  const customError = error ? error : null;

  return {
    userData: userData?.d,
    isLoading: loadingState,
    isUnauthorized,
    error: customError,
  };
}

export default useGetCurrentUserQueryExtend;
