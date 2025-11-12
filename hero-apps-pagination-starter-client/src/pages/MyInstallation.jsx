import { useEffect, useState } from "react";
import { GrInstall } from "react-icons/gr";
import { useLoaderData } from "react-router";
import InstallCard from "../ui/InstallCard";
import { toast } from "react-toastify";

const MyInstallation = () => {
  const [myAppsIds] = useState(JSON.parse(localStorage.getItem("apps")) || []);
  const allApps = useLoaderData();
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    const apps = [];
    myAppsIds.forEach((id) => {
      const isExist = allApps.find((app) => app._id == id);
      if (isExist) {
        apps.push(isExist);
      }
    });
    setMyApps(apps);
  }, [allApps, myAppsIds]);

  const handleSort = (type) => {
    if (type == "asc") {
      const sorted = myApps.sort((a, b) => a.size - b.size);
      console.log(type, sorted);
      setMyApps([...sorted]);
    } else if (type == "desc") {
      const sorted = myApps.sort((a, b) => b.size - a.size);
      console.log(type, sorted);
      setMyApps([...sorted]);
    }
  };
  const onUninstall = (id, title) => {
    const remaining = myApps.filter((app) => app.id != id);
    setMyApps([...remaining]);
    const remainingIds = remaining.map((app) => app.id);
    localStorage.setItem("apps", JSON.stringify(remainingIds));
    toast(`🗑️ ${title} un-installed from your Device`);
  };

  return (
    <div className="px-5 lg:w-11/12 mx-auto py-10">
      <title>My Installations</title>
      <div className="">
        <h2 className="text-4xl font-bold text-center text-primary flex justify-center gap-3">
          Your Installed Apps
          <GrInstall size={48} className="text-secondary"></GrInstall>
        </h2>
        <p className="text-center text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className=" flex justify-between mt-10 sticky">
        <h2 className="text-lg  underline text-secondary font-medium">
          {myApps.length} Apps Found
        </h2>
        <div className="">
          <select
            onClick={(e) => handleSort(e.target.value)}
            className="select bg-white"
          >
            <option selected disabled={true}>
              Sort By Size
            </option>
            <option value={"asc"}>Low-High</option>
            <option value={"desc"}>High-Low</option>
          </select>
        </div>
      </div>
      <div className="divider"></div>
      <div className=" grid grid-cols-1 gap-5">
        {myApps.map((app) => (
          <InstallCard
            key={app.id}
            app={app}
            onUninstall={onUninstall}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
