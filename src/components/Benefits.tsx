import { Users, Clock, ShieldHalf, CircleDollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  const benefitItems = [
    {
      icon: <Users className="text-lime-green size-7" />,
      title: "Sourcing Massif Qualifié",
      quote: "Générez un flux constant de candidats qui maîtrisent les codes du Call Center.",
    },
    {
      icon: <Clock className="text-lime-green size-7" />,
      title: "Vitesse d'Exécution",
      quote: "Réduisez votre Time-to-Hire de 60%. Recrutez en 48h.",
    },
    {
      icon: <ShieldHalf className="text-lime-green size-7" />,
      title: "Zéro Risque Turnover",
      quote: "Notre IA prédit la stabilité des agents pour éviter les départs précoces.",
    },
    {
      icon: <CircleDollarSign className="text-lime-green size-7" />,
      title: "ROI Immédiat",
      quote: "Optimisez vos coûts. Ne payez plus pour des annonces inutiles.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-off-white border-y border-gray-100 relative text-deep-blue">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 uppercase"
        >
          Résultats concrets pour votre Centre
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefitItems.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-500 italic">"{benefit.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
