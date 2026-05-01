export default function LogosSlider() {
  const logos = [
    "https://www.moncallcenter.ma/images/300/ca-7hfvsi3yaw7jdqdwnl33yxtb785tqq02122024034615.jpg",
    "https://www.moncallcenter.ma/images/300/ca-gww9hqb0l98yscyw59yshkq27ehv7y04072023104025.jpg",
    "https://www.moncallcenter.ma/images/300/ca-qw518dc0nkc4t73xdcldg2w5vai38031082022110725.jpg",
    "https://www.moncallcenter.ma/images/300/ca-v97xn3cnp7egl3ngwj6d49awelw7re12082019115803.jpg",
    "https://www.moncallcenter.ma/images/300/ca-yqic8h4qucy7mu156l9sx7xi4ra0yl18032015122518.jpg",
    "https://www.moncallcenter.ma/images/300/ca-2pywuw3wvvjsgy0lsypy7eq5yg082j25042025032000.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5sD8XN-hEm21JvI-2CycQNaWw0Zs6TtlZQ&s",
  ];

  // Repeat logos for continuous scrolling
  const allLogos = [...logos, ...logos];

  return (
    <section id="clients" className="py-16 bg-white overflow-hidden border-b border-gray-100 text-center">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="text-gray-500 font-medium text-lg">
          Plus de <span className="text-deep-blue font-bold">+447 entreprises</span> nous font confiance, dont les meilleurs centres d'appels au Maroc
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {allLogos.map((logo, index) => (
            <div key={index} className="flex-none w-[250px] px-10 flex items-center justify-center">
              <img 
                src={logo} 
                className="h-12 grayscale opacity-80 hover:grayscale-0 transition-all duration-300" 
                alt={`Partner Logo ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
