import { FaFacebook } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] items-center py-10">
      <div className="w-11/12 mx-auto grid-cols-12 grid gap-10 text-white">
        <div className="col-span-full md:col-span-6  lg:col-span-4 space-y-5 ">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="" className="w-8" />
            <h2 className="text-xl font-semibold">Hero Apps</h2>
          </div>
          <p className="text-gray-300 text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            esse autem at, laudantium dolores eaque expedita quidem eveniet,
            mollitia officiis aut porro harum minus distinctio ab ducimus labore
            laborum repellendus!
          </p>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className=" font-semibold">About Hero Apps</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Newsroom</li>
            <li>Leadership</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className=" font-semibold">About Hero Apps</h2>
          <ul className="text-gray-400 space-y-2">
            <li>Newsroom</li>
            <li>Leadership</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-2 space-y-5">
          <h2 className=" font-semibold">Social Icons</h2>
          <ul className="text-white flex gap-4 text-xl space-y-2">
            <li>
              {" "}
              <FaFacebook></FaFacebook>
            </li>
            <li>
              <BsYoutube></BsYoutube>
            </li>
            <li>
              <BsTwitterX></BsTwitterX>
            </li>
            <li>
              <ImInstagram></ImInstagram>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
