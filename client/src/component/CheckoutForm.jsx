function CheckoutForm () {
  return (
    <>
    <h2 className="text-2xl font-bold flex flex-col items-center">
        Kunduppgifter
      </h2>
      
      <form className="p-4">
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 mb-2">
              <label for="firstName">Förnamn:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="flex flex-col gap-2 mb-2">
              <label for="lastName">Efternamn:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label for="email">E-post:</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <fieldset className="flex flex-col gap-2 mb-4 border-black border-2 p-3 lg:grid lg:grid-cols-2">
          <legend className="text-2xl">Adress</legend>
          <div className="flex flex-col p-3">
            <label for="street">Gata</label>
            <input type="text" id="street" name="street" />

            <label for="postNumber">Postnummer</label>
            <input type="text" id="postNumber" name="postNumber" pattern="[0-9]{5}" class="w-[20%]" />

            <label for="city">Stad</label>
            <input type="text" id="city" name="city" class="w-[70%]" />
          </div>
        </fieldset>
        <div className="mb-4">
          <label for="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              value="yes-newsletter" />
                Jag vill ta emot nyhetsbrev
          </label>
        </div>
        <div className="flex justify-center">
          <div class="button-styles flex justify-center items-center w-1/2">
            <button type="submit">Köp</button> 
          </div>
        </div>
      </form>
      </>
  )
}