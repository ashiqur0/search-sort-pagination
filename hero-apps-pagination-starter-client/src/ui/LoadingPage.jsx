import { DiVisualstudio } from "react-icons/di";
import logo from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div className="min-h-screen text-4xl font-bold tracking-wider gap-5 flex justify-center items-center opacity-50 ">
      L <img src={logo} alt="" className="w-20 animate-spin" />O A D I N G
    </div>
  );
};

export default LoadingPage;
