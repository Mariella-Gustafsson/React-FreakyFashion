const Hero = () => {

  return (
    <section className="relative sm:h-[300px] lg:h-[550px]">
      <img
        src="http://localhost:8000/images/Hero.jpg"
        alt="2 modeller som bär kläder från Freaky Fashion"
        className="opacity-70 sm:w-full sm:h-full sm:object-cover"
      />
        <h1 className="text-4xl font-bold absolute top-3 left-1/2 transform -translate-x-1/2 w-[60%] text-center text-[white] text-shadow font-[Rowdies] lg:text-6xl">
          Shoppa nu och gör din stil unik!
        </h1>
        <p className="absolute bottom-3 text-2xl w-[70%] text-center left-1/2 transform -translate-x-1/2 text-shadow text-[#f8f8f8] font-bold font-[Rowdies] sm:right-3 lg:text-3xl lg:bottom-6 lg:w-[50%]">
          Hitta stilar som speglar din personlighet – oavsett vem du är!
        </p>
    </section>
  );
};

export default Hero;