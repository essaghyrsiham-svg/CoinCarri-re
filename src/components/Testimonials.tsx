import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sara M.",
      role: "RRH",
      text: "Gain de temps incroyable !",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Karim T.",
      role: "Directeur",
      text: "Matching IA parfait.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Ahmed R.",
      role: "Manager",
      text: "Service très réactif.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Yasmine B.",
      role: "Team Leader",
      text: "Interface efficace.",
      image: "https://images.pexels.com/photos/7644890/pexels-photo-7644890.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 uppercase text-deep-blue"
        >
          Ils ont transformé leur recrutement
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-off-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="flex text-lime-green mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic text-sm mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3 justify-center">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
