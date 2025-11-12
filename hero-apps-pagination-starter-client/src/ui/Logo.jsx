import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="" className="w-12" />
      <h2 className="text-xl hidden md:block text-secondary uppercase font-semibold ">
        HERO
        <span className="">.IO</span>
      </h2>
    </div>
  );
};

export default Logo;
