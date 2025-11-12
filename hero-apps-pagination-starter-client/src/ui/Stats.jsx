import { FaStar } from "react-icons/fa6";
import { IoDownload, IoLogoGooglePlaystore } from "react-icons/io5";

const Stats = () => {
  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <h2 className="text-white font-bold text-4xl text-center">
        Trusted by Millions, Built for You
      </h2>
      <div className="stats stats-vertical lg:stats-horizontal  text-white py-10">
        <div className="stat space-y-3">
          <div className="stat-figure">
            <IoDownload size={48}></IoDownload>
          </div>
          <div className="">Total Downloads</div>
          <div className="stat-value  text-5xl">29.6M</div>
          <div className="stat-desc text-white">21% more than last month</div>
        </div>

        <div className="stat space-y-3">
          <div className="stat-figure ">
            <FaStar size={48}></FaStar>
          </div>
          <div className=" text-white">Total Reviews</div>
          <div className="stat-value ">906K</div>
          <div className="stat-desc text-white">46% more than last month</div>
        </div>

        <div className="stat space-y-3">
          <div className="stat-figure ">
            <IoLogoGooglePlaystore size={48}></IoLogoGooglePlaystore>
          </div>
          <div className="stat-title text-white">Active Apps</div>
          <div className="stat-value">132+</div>
          <div className="stat-desc text-white">31 more will Launch</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
