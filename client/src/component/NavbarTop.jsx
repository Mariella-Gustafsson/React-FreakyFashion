import '../App.css'

const Headerbar = () => {
  return (
    <ul className="flex justify-between font-bold text-lg text-[#5D2B7E] lg:items-center lg:gap-4">
      
      <li className="font-[Rowdies] text-lg">
        <a href="#" className="hover:text-[#eb9fc5]">
          Nyheter
        </a>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <a href="#">
          Topplistan
        </a>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <a href="#">
          Rea
        </a>
      </li>
      <li className="font-[Rowdies] text-lg hover:text-[#eb9fc5]">
        <a href="#">
          Kampanjer
        </a>
      </li>
    </ul>
  );
};

export default Headerbar;