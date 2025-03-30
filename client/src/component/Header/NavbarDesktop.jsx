import NavbarTop from "./NavbarTop";
import Headerbar from "./Headerbar";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <section className="hidden h-[70px] shadow-md shadow-gray-800 lg:flex lg:justify-between lg:px-8">
      <NavbarTop />
      <div className="w-[300px]">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Headerbar />
    </section>
  );
};

export default NavbarDesktop;

