import { Link } from "react-router-dom";

function ToCart () {

  return (
    <Link 
      to="/checkout"
      className="flex justify-center"
    >
      <button
        type="button"
        className="border-1 my-4 border-black p-4 bg-[#5D2B7E] text-[#e9acca] font-bold shadow-md shadow-black w-[40%]"
      >
        Till kassan
      </button>
    </Link>
  )
};

export default ToCart;