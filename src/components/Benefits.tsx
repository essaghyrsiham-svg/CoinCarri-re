import { Users, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  const benefitItems = [
    {
      icon: <Users className="text-lime-green size-7" />,
      title: "Sourcing Massif Qualifié",
      quote: "Générez un flux constant de candidats.",
    },
    {
      icon: <Clock className="text-lime-green size-7" />,
      title: "Vitesse d'Exécution",
      quote: "Réduisez votre Time-to-Hire de 60%.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-off-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase text-deep-blue"
        >
          Résultats concrets pour votre Centre
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefitItems.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 items-start"
            >
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-deep-blue">{benefit.title}</h3>
                <p className="text-gray-500 italic">"{benefit.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
