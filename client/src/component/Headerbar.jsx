import '../App.css'

const Headerbar = () => {
  return (
    <div className="flex gap-4 relative items-center justify-between w-full sm:w-[60%]">
      <form action="/search" className="flex items-center flex-grow border rounded-xl" >
        <input type="search" name="search"  placeholder="Sök produkt" className="pl-10 py-1 text-md lg:w-[70%]" />
        <i className="bi bi-search absolute text-xl top-1 left-3 sm:top-9 text-[#5D2B7E]"></i> 
      </form>
      <a href="#">
        <i className="bi bi-heart-fill text-2xl flex-shrink-0 text-[#5D2B7E]"></i>
      </a>
      <a href="/checkout">
        <i className="bi bi-basket-fill text-2xl flex-shrink-0 text-[#5D2B7E]"></i>
      </a>
    </div>
  );
};

export default Headerbar;