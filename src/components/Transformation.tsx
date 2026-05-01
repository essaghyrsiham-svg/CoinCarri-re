import { motion } from "motion/react";

export default function Transformation() {
  return (
    <section id="transformation" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-8 text-deep-blue uppercase tracking-tighter"
          >
            Ne laissez plus le recrutement vous épuiser
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-[1.8]"
          >
            Découvrez comment <strong className="text-deep-blue">CoinCarrière</strong> révolutionne le sourcing en vidéo. ✨
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative pt-[56.25%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(22,39,95,0.3)] border-8 border-off-white">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://drive.google.com/file/d/1R1sajReXglQDHGDxTy8OVpvWNgCvvdQQ/preview" 
              allow="autoplay" 
              allowFullScreen
            />
          </div>
          <p className="text-center font-bold text-lime-green uppercase text-sm tracking-widest mt-8 italic">
            L'effet CoinCarrière en action
          </p>
        </motion.div>
      </div>
    </section>
  );
}
