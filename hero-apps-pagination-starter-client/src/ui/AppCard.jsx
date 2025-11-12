import { FaStar } from "react-icons/fa6";
import { FcRatings } from "react-icons/fc";
import { GrDownload } from "react-icons/gr";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const {
    image,
    title,
    // rating,
    // companyName,
    _id,
    // description,
    // size,
    // reviews,
    ratingAvg,
    // ratings,
    downloads,
  } = app;
  return (
    <Link
      to={`/apps/${_id}`}
      className="card shadow-lg cursor-pointer  bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 justify-around  p-4 gap-4"
    >
      <figure className=" pb-0">
        <img
          src={image}
          alt="Shoes"
          className=" h-full w-full object-cover rounded-2xl"
        />
      </figure>
      <div className="">
        <p className="font-semibold text-center">{title}</p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="badge badge-soft badge-success ">
          <GrDownload></GrDownload> {downloads}
        </div>
        <div className="badge badge-soft badge-secondary">
          <FaStar></FaStar> {ratingAvg}
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
