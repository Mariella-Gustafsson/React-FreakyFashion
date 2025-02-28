import '../App.css'

const Headerbar = () => {
  return (
    <ul className="flex justify-between font-bold text-lg text-[#5D2B7E] sm:flex-row">
      
      <li className="font-[Rowdies] text-lg">
        <a href="#">
          Nyheter
        </a>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg">
        <a href="#">
          Topplistan
        </a>
      </li>
      <li className="sm:mr-6 font-[Rowdies] text-lg">
        <a href="#">
          Rea
        </a>
      </li>
      <li className="font-[Rowdies] text-lg">
        <a href="#">
          Kampanjer
        </a>
      </li>
    </ul>
  );
};

export default Headerbar;