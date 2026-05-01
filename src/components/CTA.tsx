import { motion } from "motion/react";

export default function CTA() {
  return (
    <section id="contact" className="py-32 text-center relative overflow-hidden bg-off-white border-t border-gray-100">
      <div className="relative z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8 text-deep-blue"
        >
          Transformez votre plateau <br /> 
          <span className="text-lime-green">dès aujourd'hui.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a 
            href="https://coincarriere.com/register?type=company" 
            className="bg-lime-green hover:bg-lime-hover text-deep-blue font-black py-6 px-16 rounded-full text-2xl transition-all shadow-xl transform hover:scale-110 inline-block"
          >
            Lancer mon recrutement
          </a>
        </motion.div>
      </div>
    </section>
  );
}
