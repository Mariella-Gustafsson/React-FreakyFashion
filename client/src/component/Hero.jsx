import '../App.css'

const Hero = () => {

  return (
    <section className="relative lg:flex flex-row-reverse ">
      <img
        src="images/Hero.jpg"
        alt="2 modeller som bär kläder från Freaky Fashion"
        className="opacity-70 lg:max-w-lg"
      />
        <h1 className="text-2xl font-bold absolute top-3 left-1/2 transform -translate-x-1/2 w-[60%] text-center text-[white] text-shadow font-[Rowdies]">
          Shoppa nu och gör din stil unik!
        </h1>
        <p className="absolute bottom-3 w-[70%] text-center left-1/2 transform -translate-x-1/2 text-shadow text-[#f8f8f8] font-bold font-[Rowdies]">
          Hitta stilar som speglar din personlighet – oavsett vem du är!
        </p>
    </section>
  );
};

export default Hero;