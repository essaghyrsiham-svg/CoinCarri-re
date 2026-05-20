import { motion } from "motion/react";

export default function Hero() {
  return (
   <section class="hero">
  
  <div class="hero-content">
    <h1>
      Recrutez plus vite les meilleurs talents.
    </h1>

    <p>
      CoinCarrière aide les centres d’appel à recevoir des candidats qualifiés sans perdre des heures sur des CV inutiles.
    </p>

    <a href="https://coincarriere.com/register?type=company" 
       target="_blank"
       class="hero-btn"
       onclick="fbq('track', 'Lead');">
       Publier votre annonce
    </a>
  </div>

  <div class="hero-image">
    
    <img src="YOUR-IMAGE.png" alt="CoinCarrière Hero">

    <div class="stat-card card-1">
      <span>+127%</span>
      <p>Évolution des résultats</p>
    </div>

    <div class="stat-card card-2">
      <span>2,847+</span>
      <p>Candidats qualifiés</p>
    </div>

  </div>

</section>
