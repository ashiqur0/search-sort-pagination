import { Link } from "react-router";
import { BiErrorCircle } from "react-icons/bi";

const NotFound = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] space-y-5 text-center">
      <BiErrorCircle className="text-red-500" size={100} />
      <h2 className="text-3xl font-bold text-primary">
        {message || "No App Found"}
      </h2>
      <p className="opacity-70">
        The app you are looking for does not exist or has been removed.
      </p>
      <Link to="/" className="btn btn-primary text-white">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
