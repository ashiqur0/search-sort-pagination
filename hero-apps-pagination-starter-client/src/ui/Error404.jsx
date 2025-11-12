import { useRouteError, Link } from "react-router";
import { MdErrorOutline } from "react-icons/md";
import Header from "./Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <Header></Header>
      </header>

      <div className="flex flex-col items-center justify-center h-screen text-center p-5">
        <MdErrorOutline className="text-red-500" size={120} />
        <h1 className="text-6xl font-extrabold text-primary mt-5">
          {error.status || 404}
        </h1>
        <h2 className="text-2xl font-semibold mt-3">
          {error.statusText || error.message || "Something went wrong!"}
        </h2>
        <p className="opacity-70 mt-2 max-w-md">
          Sorry, the page you are looking for might be removed, renamed, or is
          temporarily unavailable.
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/" className="btn btn-primary text-white shadow-lg">
            Back to Home
          </Link>
          <Link to="/apps" className="btn btn-outline btn-secondary">
            Browse Apps
          </Link>
        </div>
      </div>
    </>
  );
}
