import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-blue pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://www.maroccallcenter.com/wp-content/uploads/2019/05/back-office.jpg" 
          className="w-full h-full object-cover" 
          alt="Back Office" 
        />
        <div className="absolute inset-0 bg-deep-blue/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white"
        >
          Recrutez vos agents <br /> 
          <span className="text-gradient-hero">sans effort</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          La solution N°1 au Maroc pour le recrutement massif et qualifié dédié exclusivement aux centres d'appels.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="https://coincarriere.com/register?type=company" 
            className="bg-lime-green hover:bg-lime-hover text-deep-blue font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Démarrer gratuitement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
