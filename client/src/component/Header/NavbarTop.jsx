import { Link } from "react-router-dom";

const Headerbar = () => {
  return (
    <ul className="flex justify-between font-bold text-lg text-[#5D2B7E] lg:items-center lg:gap-4">
      
      <li className="font-[Rowdies] text-lg">
        <Link to="#" className="hover:text-[#eb9fc5]">
          Nyheter
        </Link>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <Link to="#">
          Topplistan
        </Link>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <Link to="#">
          Rea
        </Link>
      </li>
      <li className="font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <Link to="#">
          Kampanjer
        </Link>
      </li>
    </ul>
  );
};

export default Headerbar;