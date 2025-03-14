function FooterIcons () {
  return (
    <ul className="flex flex-col m-10 gap-5 text-2xl items-center sm:grid sm:grid-cols-2 sm:place-content-center lg:text-lg lg:grid-cols-4">
      <li className="sm:flex sm:justify-center">
        <i className="bi bi-globe-americas mr-3"></i>
        <span>Gratis frakt och returer</span>
      </li>
      <li className="sm:flex sm:justify-center">
        <i className="bi bi-airplane-fill mr-3"></i>
        <span className="text">Expressfrakt</span>
      </li>
      <li className="sm:flex sm:justify-center">
        <i className="bi bi-shield-shaded mr-3"></i>
        <span>Säkra betalningar</span>
      </li>
      <li className="sm:flex sm:justify-center">
        <i className="bi bi-emoji-smile mr-3"></i>
        <span>Nyheter varje dag</span>
      </li>
    </ul>
  )
}

export default FooterIcons;