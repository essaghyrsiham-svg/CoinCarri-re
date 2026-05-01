export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100 text-center">
      <img 
        src="https://cdn.coincarriere.com/wp-content/uploads/2025/11/1762829178875-w23oav1d4pb.png" 
        alt="CoinCarrière" 
        className="h-10 w-auto mx-auto mb-6" 
      />
      <p className="text-sm text-gray-400 italic">
        © {new Date().getFullYear()} CoinCarrière. Leader du recrutement Call Center au Maroc.
      </p>
    </footer>
  );
}
