import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <p className="text-gray-500 mb-8">
        {error?.statusText || error?.message}
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
