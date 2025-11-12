import { FaStar } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router";

const InstallCard = ({ app, onUninstall }) => {
  const { image, title, id, ratingAvg, downloads, size } = app;

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200">
      {/* App Icon */}
      <Link to={`/apps/${id}`} className="w-14 h-14 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </Link>

      {/* App Info */}
      <div className="flex-1">
        <Link to={`/apps/${id}`}>
          <p className="font-medium text-sm line-clamp-1">{title}</p>
        </Link>
        <div className="flex items-center gap-3 text-xs mt-1">
          <span className="flex items-center gap-1 text-success">
            <GrDownload className="inline-block" /> {downloads}
          </span>
          <span className="flex items-center gap-1 text-secondary">
            <FaStar className="inline-block" /> {ratingAvg}
          </span>
          <span className="text-xs text-gray-500">{size} MB</span>
        </div>
      </div>

      {/* Uninstall Button */}
      <button
        className="btn btn-success text-white"
        onClick={() => onUninstall(id, title)}
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallCard;
