import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";

const AISurvivalQuote = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-card rounded-2xl p-8 md:p-12 border border-primary/30 overflow-hidden">
            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary rounded-br-2xl" />

            {/* Alert Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-4 rounded-full bg-primary/10"
              >
                <AlertTriangle className="w-8 h-8 text-primary" />
              </motion.div>
            </div>

            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-primary/20" />
              <blockquote className="text-center">
                <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4">
                  AI is{" "}
                  <span className="text-muted-foreground line-through">
                    not
                  </span>{" "}
                  replacing developers.
                  <br />
                  <span className="text-gradient-rebel">
                    AI is replacing outdated developers.
                  </span>
                </p>
              </blockquote>
            </div>

            {/* Sub text */}
            <p className="text-center text-muted-foreground mt-6">
              Don't be outdated. Be a{" "}
              <span className="text-primary font-semibold">Digital Rebel</span>.
            </p>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISurvivalQuote;
