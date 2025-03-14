function FooterNavigation () {
  return (
    <div className="grid grid-cols-4 p-6 text-2xl bg-[#f9ecf3] text-[#5D2B7E] lg:text-lg">
        <nav>
          <h3 className="p-2 font-bold">Shopping</h3>
          <ul>
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Vinterjackor</a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Pufferjackor</a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Kappa</a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Trenchcoats</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="p-2 font-bold">Mina sidor</h3>
            <ul>
              <li className="p-2">
                <a href="#" className="hover:text-[#bd95d8]">Mina ordrar</a>
              </li>
              <li className="p-2">
                <a href="#" className="hover:text-[#bd95d8]">Mitt konto</a>
              </li>
            </ul>
          </nav>
        <nav>
        <h3 className="p-2 font-bold">Kundtjänst</h3>
          <ul>   
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Returnpolicy</a>
            </li>
            <li className="p-2">
              <a href="#" className="hover:text-[#bd95d8]">Integritetspolicy</a>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default FooterNavigation;