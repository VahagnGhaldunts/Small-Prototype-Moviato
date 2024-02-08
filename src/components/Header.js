import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
        <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Logo} className=" h-30 w-40" alt="Moviato Logo" />
          </Link>
          <div id="mob-nav" className="flex md:order-4"></div>
            <ul className="flex md:font-extrabold ">
            </ul>
          </div>
    </header>
  );
}
