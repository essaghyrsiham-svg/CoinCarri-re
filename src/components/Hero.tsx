import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Recrutez plus vite les meilleurs talents.
        </h1>

        <p>
          CoinCarrière aide les centres d’appel à recevoir des candidats qualifiés sans perdre des heures sur des CV inutiles.
        </p>

        <a 
          href="https://coincarriere.com/register?type=company" 
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          onClick={() => {
            if (typeof window !== 'undefined' && (window as any).fbq) {
              (window as any).fbq('track', 'Lead');
            }
          }}
        >
          Publier votre annonce
        </a>
      </div>

      <div className="hero-image">
        <img src="https://drive.google.com/file/d/1i9AaeSEbabOTFzC8CDi6SFneWIQBpUI0/view?usp=drivesdk" alt="Hero CoinCarrière" />
        
        <div className="stat-card card-1">
          <span>+127%</span>
          <p>Évolution des résultats</p>
        </div>

        <div className="stat-card card-2">
          <span>2,847+</span>
          <p>Candidats qualifiés</p>
        </div>
      </div>
    </section>
  );
}
