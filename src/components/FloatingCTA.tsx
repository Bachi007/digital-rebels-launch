import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-accent text-accent-foreground rounded-full font-display font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-[0_0_30px_hsl(110_100%_62%/0.5)] transition-shadow md:bottom-8 md:right-8"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </motion.a>
  );
};

export default FloatingCTA;
