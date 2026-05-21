import { motion } from "motion/react";

export default function Navbar() {
  
    <nav className="fixed top-0 left-0 w-full bg-white px-8 py-[14px] z-50 shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img 
            src="https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png" 
            alt="CoinCarrière" 
            className="h-10 w-auto"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8 font-semibold text-deep-blue"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-lime-green transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
