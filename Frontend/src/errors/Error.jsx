import { Link } from "react-router-dom";
import error from "../assets/icons/404 error lost in space-pana.svg";
import { RiArrowGoBackLine} from "react-icons/ri";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <img src={error} alt="error image" className="w-full h-[90vh] "/>

      <Link to={"/"} className="text-navyBlue text-center flex items-center lg:text-3xl text-4xl md:text-5xl  px-4  border-2 border-navyBlue rounded-full hover:bg-navyBlue hover:text-brightTeal transition-all 0.5s "><RiArrowGoBackLine /></Link>
    </div>
  );
};

export default Error;
