import { useState } from "react";

function NewProduct () {

  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    picture_url: "",
    brand: "",
    SKU: "",
    price: "",
    publish_date: ""
  })

  function generateUrlSlug (product_name) {
    const urlSlug = product_name
                    .toLowerCase() //omvandlar produktnamnet till små bokstäver
                    .trim() // tar bort white space från början och slutet på produktnamnet
                    .replace(/\s/g, "-") // ersätter all white space med bindestreck
                    .replace(/[åä]/g, "a") //ersätter å och ä i produktnamnet med a
                    .replace(/[ö]/g, "o") // ersätter ö i produktnamnet med o
                    .replace(/[^a-z0-9-]/g, "") // tar bort alla specialtecken från produktnamnet
                    .replace(/-+/g, "-"); // tar bort flera bindestreck som sitter ihop och ersätter med ett
    const randomNumber = Math.floor(Math.random() * 9999);
    const generatedUrlSlug = urlSlug + randomNumber;
    return generatedUrlSlug;
  };

  const handleInputChange = (e) => {
    console.log("handle input change");
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    const { product_name } = formData;
    const url_slug = generateUrlSlug(product_name);
    console.log(url_slug);
    const product = {...formData, url_slug: url_slug};
    console.log(product);

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product)
    })
    .then(resp => {
      console.log("nollställa form");
      setFormData({product_name: "",
      description: "",
      picture_url: "",
      brand: "",
      SKU: "",
      price: "",
      publish_date: ""
    });
  });
}

  return (
    <section className="m-10 w-[70%]">
      <h1 className="text-2xl font-bold pb-4">
        Ny produkt
      </h1>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label for="product_name">Namn</label>
        <input 
          type="text" 
          name="product_name" 
          value={formData.product_name} 
          onChange={handleInputChange} 
          id="product_name" 
          placeholder="Ange namn" 
          maxlength="50" 
          required 
          className="w-1/2 border-1 p-2" 
        />

        <label for="description">Beskrivning</label>
        <textarea 
          name="description" 
          value={formData.description} 
          onChange={handleInputChange} 
          id="description" 
          cols="30" 
          rows="6" 
          placeholder="Ange beskrivning" 
          className="border-1 p-2">
        </textarea>

        <label for="picture">Bild:</label>
        <input 
          type="text" 
          name="picture_url" 
          value={formData.picture_url} 
          onChange={handleInputChange} 
          id="picture" 
          placeholder="Ange URL" 
          required 
          className="border-1 p-2" 
        />

        <label for="brand">Märke</label>
        <input 
          type="text" 
          id="brand" 
          name="brand" 
          value={formData.brand} 
          onChange={handleInputChange} 
          className="border-1 p-2" 
        />

        <label for="SKU">SKU</label>
        <input 
          type="text" 
          id="SKU" 
          name="SKU" 
          value={formData.SKU} 
          onChange={handleInputChange} 
          placeholder="Ange SKU" 
          pattern="[A-Z]{3}[0-9]{3}" 
          required 
          className="border-1 w-1/4 p-2"
        />
        
        <label for="price">Pris</label>
        <input 
          type="number" 
          id="price" 
          name="price" 
          value={formData.price} 
          onChange={handleInputChange} 
          className="w-1/4 border-1 p-2" 
        />

        <label for="publish_date">Publiceringsdatum</label>
        <input 
          type="date" 
          id="publish_date" 
          name="publish_date" 
          value={formData.publish_date} 
          onChange={handleInputChange} 
          className="w-1/2 border-1 p-2" 
        />

        <button 
          type="submit" 
          className="border-1 border-black p-4 bg-[#5D2B7E] text-[#e9acca] font-bold shadow-md shadow-black w-[40%] mt-4">
            Lägg till
        </button>
      </form>
		</section>
  )
}

export default NewProduct;