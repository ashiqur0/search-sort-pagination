import heroImg from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="">
      <div className="flex flex-col  justify-center items-center md:w-11/12 mx-auto pt-10  pb-0">
        <div className="space-y-5  text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-20 md:max-w-xl mx-auto">
            We Build <span className="text-secondary"> Productive</span>
            <span className="text-primary"> Apps</span>
          </h2>
          <p className="italic md:max-w-9/12 mx-auto">
            At <span className="text-primary font-bold">HERO.IO</span> , we
            craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences that truly make an impact
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://play.google.com/store/games"
              target="_blank"
              referrerPolicy="no-referrer"
              className="btn btn-xl  hover:shadow-xl rounded-xl"
            >
              <img
                src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
                alt=""
                className="w-10"
              />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="btn btn-xl hover:shadow-xl rounded-xl"
            >
              <img
                src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
                alt=""
                className="w-10"
              />
              App Store
            </a>
          </div>
        </div>
        <img src={heroImg} alt="" className="pt-10" />
      </div>
    </div>
  );
};

export default Banner;
