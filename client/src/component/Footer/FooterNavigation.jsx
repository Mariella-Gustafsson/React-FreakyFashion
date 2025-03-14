function FooterNavigation () {
  return (
    <div className="footer hidden sm:grid sm:grid-cols-4 sm:p-6">
        <nav>
          <h3 className="p-2 font-bold">Shopping</h3>
          <ul>
            <li className="p-2">
              <a href="#">Vinterjackor</a>
            </li>
            <li className="p-2">
              <a href="#">Pufferjackor</a>
            </li>
            <li className="p-2">
              <a href="#">Kappa</a>
            </li>
            <li className="p-2">
              <a href="#">Trenchcoats</a>
            </li>
          </ul>
        </nav>
        <nav>
          <h3 className="p-2 font-bold">Mina sidor</h3>
            <ul>
              <li className="p-2">
                <a href="#">Mina ordrar</a>
              </li>
              <li className="p-2">
                <a href="#">Mitt konto</a>
              </li>
            </ul>
          </nav>
        <nav>
        <h3 class="p-2 font-bold">Kundtjänst</h3>
          <ul>   
            <li class="p-2">
              <a href="#">Returnpolicy</a>
            </li>
            <li class="p-2">
              <a href="#">Integritetspolicy</a>
            </li>
          </ul>
        </nav>
      </div>
  )
}