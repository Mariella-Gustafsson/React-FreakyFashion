function FooterAccordion () {
  return (
    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-pink-100 dark:bg-gray-800 text-pink-600 dark:text-white" class="sm:hidden">
        <h3 id="accordion-color-heading-1">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-pink-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
            <span>Shopping</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h3>
        <div id="accordion-color-body-1" class="hidden" aria-labelledby="accordion-color-heading-1">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <nav class="mb-2 text-gray-500 dark:text-gray-400">
              <ul>
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
        <h3 id="accordion-color-heading-2">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-pink-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
            <span>Mina sidor</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h3>
        <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <nav class="mb-2 text-gray-500 dark:text-gray-400">
              <ul>
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
        <h3 id="accordion-color-heading-3">
          <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-pink-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-red-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
            <span>Kundtjänst</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h3>
        <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <nav class="mb-2 text-gray-500 dark:text-gray-400">
              <ul>
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
  )
}