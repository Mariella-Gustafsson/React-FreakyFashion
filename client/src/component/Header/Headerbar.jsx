import SearchField from '../Search/SearchField';
import { Link } from 'react-router-dom';

const Headerbar = () => {
  return (
    <div className="flex gap-4 relative items-center justify-between w-full sm:w-[60%] lg:max-w-[30%]">
      <SearchField />
      <Link to="#">
        <i className="bi bi-heart-fill text-2xl flex-shrink-0 text-[#5D2B7E] hover:text-[#eb9fc5]"></i>
      </Link>
      <Link to={"/basket"}>
        <i className="bi bi-basket-fill text-2xl flex-shrink-0 text-[#5D2B7E] hover:text-[#eb9fc5]"></i>
      </Link>
    </div>
  );
};

export default Headerbar;