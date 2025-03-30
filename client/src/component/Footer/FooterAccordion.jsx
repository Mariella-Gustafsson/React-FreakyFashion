import { useState } from 'react';
import ArrowUp from '../../assets/ArrowUp';
import ArrowDown from '../../assets/ArrowDown';

function FooterAccordion () {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    // Om vi klickar på samma panel, stänger vi den
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

    <div className="bg-[#f9ecf3]">
      <div className="border-b-2 border-b-[#e9d1dc] py-3">
        <button
          className="flex font-bold text-3xl text-[#5D2B7E] pl-3"
          onClick={() => {
            toggleAccordion(0);
          }}
        >

        {activeIndex === 0 ? <ArrowUp /> : <ArrowDown />}
          Shopping
        </button>
        <div
          className={`pl-12 ${activeIndex === 0 ? 'block' : 'hidden'}`}
        >
          <nav className="my-4 text-[#5D2B7E] text-2xl">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Vinterjackor</a>
                </li>
                <li>
                  <a href="#">Pufferjackor</a>
                </li>
                <li>
                  <a href="#">Kappa</a>
                </li>
                <li>
                  <a href="#">Trenchcoats</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>

      <div className="border-b-2 border-b-[#e9d1dc] py-3">
        <button
          className="flex font-bold text-3xl text-[#5D2B7E] pl-3"
          onClick={() => {
            toggleAccordion(1);
          }}
        >
          {activeIndex === 1 ? <ArrowUp /> : <ArrowDown />}
          Mina Sidor
        </button>
        <div
          className={`pl-12 ${activeIndex === 1 ? 'block' : 'hidden'}`}
        >
            <nav className="my-4 text-[#5D2B7E] text-2xl">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Mina ordrar</a>
                </li>
                <li>
                  <a href="#">Mitt konto</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>

      <div className="border-b-2 border-b-[#e9d1dc] py-3">
        <button
          className="flex font-bold text-3xl text-[#5D2B7E] pl-3"
          onClick={() => {
            toggleAccordion(2);
          }}
        >
          {activeIndex === 2 ? <ArrowUp /> : <ArrowDown />}
          Kundtjänst
        </button>
        <div
          className={`pl-12 ${activeIndex === 2 ? 'block' : 'hidden'}`}
        >
          <nav className="my-4 text-[#5D2B7E] text-2xl">
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#">Returnpolicy</a>
                </li>
                <li>
                  <a href="#">Integritetspolicy</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default FooterAccordion;