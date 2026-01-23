import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-card to-secondary/20" />

      {/* Animated Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex p-4 rounded-full bg-primary/20 mb-6"
          >
            <Flame className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-rebel">Admissions Open</span> —
            Limited Seats
          </h2>

          {/* Subtext */}
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join the next batch of Digital Rebels. Transform your career with
            AI-powered skills that the industry actually needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="rebel" size="xl" className="w-full sm:w-auto">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="cyber-outline" size="xl" className="w-full sm:w-auto">
              Talk to Counselor
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              No Cost EMI Available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              100% Placement Assistance
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Industry Mentors
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
