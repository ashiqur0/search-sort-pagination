import { FiTrendingUp } from "react-icons/fi";
import { Link, useLoaderData } from "react-router";
import AppCard from "./AppCard";

const OurApps = () => {
  const apps = useLoaderData();

  return (
    <div>
      <div className="">
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          Trending Apps
          <FiTrendingUp size={48} className="text-secondary"></FiTrendingUp>
        </h2>
        <p className="text-center text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="text-center">

        <Link
          to="/apps"
          className="btn btn-wide  text-white hover:shadow-xl bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] "
        >
          Show All
        </Link>
        
      </div>
    </div>
  );
};

export default OurApps;
