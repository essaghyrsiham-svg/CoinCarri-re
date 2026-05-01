import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Analyse",
      description: "Identification précise du profil idéal.",
    },
    {
      id: "02",
      title: "Matching IA",
      description: "Filtrage intelligent de milliers de CV.",
    },
    {
      id: "03",
      title: "Validation",
      description: "Évaluation rigoureuse des soft-skills.",
    },
    {
      id: "04",
      title: "Placement",
      description: "Short-list finale prête à l'emploi.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-deep-blue text-4xl font-bold mb-16 uppercase tracking-tight"
        >
          Notre Processus en <span className="text-lime-green">4 étapes</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-off-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-lime-green text-3xl font-black mb-4">{step.id}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
