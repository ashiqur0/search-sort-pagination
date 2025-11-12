import { useEffect, useMemo, useState } from "react";
import { BiDownload, BiLogoPlayStore } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { ImDownload } from "react-icons/im";
import { MdReviews } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import ReviewChart from "../ui/ReviewChart";
import { AiOutlineLoading } from "react-icons/ai";
import NotFound from "../ui/NotFound";
import frame from "../utils/confetti";
import { toast } from "react-toastify";

const AppDetails = () => {
  const app = useLoaderData();

  const [isInstalled, setisInstalled] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const installedIds = JSON.parse(localStorage.getItem("apps")) || [];
    if (installedIds.indexOf(id) != -1) {
      setisInstalled(true);
    }
  }, [id]);

  const {
    image,
    title,
    // rating,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};

  const finalRatings = useMemo(() => {
    if (!ratings) return [];
    return [...ratings].reverse();
  }, [ratings]);

  if (!app) {
    return <NotFound message={"App Is Not Found"}></NotFound>;
  }

  const handleInstall = () => {
    const installedIds = JSON.parse(localStorage.getItem("apps")) || [];
    installedIds.push(id);
    localStorage.setItem("apps", JSON.stringify(installedIds));
    setisInstalled(true);
    toast.success(`Yahoo ⚡!! ${title} Installed Successfully`);
    frame(3);
  };

  return (
    <div className="w-11/12 mx-auto space-y-5 py-20">
      <title>{title || `404 - App Not Found`}</title>
      <div className="flex lg:flex-row flex-col gap-5 items-stretch">
        <div className="flex-1">
          <img src={image} className="rounded-xl shadow-2xl h-full" alt="" />
        </div>
        <div className="flex-2">
          <div className="space-y-3 border-b-2 pb-4 border-secondary">
            <h2 className="text-primary text-3xl font-bold">{title}</h2>
            <p>
              Developed by{" "}
              <span className="text-secondary font-medium">{companyName}</span>
            </p>
          </div>
          <div className="py-5 flex justify-between items-center">
            <div className="stats stats-horizontal">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <BiDownload size={48}></BiDownload>
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaStar size={48}></FaStar>
                </div>
                <div className="stat-title">Avarage Ratings </div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <MdReviews size={48}></MdReviews>
                </div>
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">{reviews}</div>
              </div>
            </div>
          </div>
          <div className="">
            {isInstalled ? (
              <button className="btn shadow-xl hover:shadow-2xl btn-xl disabled:opacity-80 bg-success btn-success text-white">
                Installed
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white"
              >
                Install Now ({size}MB)
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2>
        <div className="">
          <ReviewChart ratings={finalRatings}></ReviewChart>
        </div>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="text-4xl font-bold text-primary mb-5">Description</h2>
        <div className="text-justify space-y-3 opacity-60">
          {description?.split("\n").map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
