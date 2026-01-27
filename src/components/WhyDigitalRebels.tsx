import { motion } from "framer-motion";
import { GraduationCap, Building2, Rocket, X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonCards = [
  {
    title: "Traditional Colleges",
    icon: GraduationCap,
    status: "past",
    color: "muted",
    bgColor: "bg-red-500/5",
    borderColor: "border-red-500/10",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-300",
    textColor: "text-red-200",
    points: [
      { text: "Outdated curriculum", negative: true },
      { text: "Theory-heavy approach", negative: true },
      { text: "No industry exposure", negative: true },
      { text: "Generic teaching", negative: true },
    ],
  },
  {
    title: "Coaching Centers",
    icon: Building2,
    status: "shortcuts",
    color: "muted",
    bgColor: "bg-yellow-500/5",
    borderColor: "border-yellow-500/10",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-300",
    textColor: "text-yellow-200",
    points: [
      { text: "Interview-focused only", negative: true },
      { text: "No real projects", negative: true },
      { text: "Memorization tactics", negative: true },
      { text: "AI-ignorant training", negative: true },
    ],
  },
  {
    title: "Digital Rebels",
    icon: Rocket,
    status: "future",
    color: "primary",
    bgColor: "bg-gradient-to-br from-primary/8 to-accent/8",
    borderColor: "border-primary/30",
    iconBg: "bg-gradient-to-br from-primary/15 to-accent/15",
    iconColor: "text-primary/90",
    textColor: "text-primary/80",
    points: [
      { text: "AI-first curriculum", negative: false },
      { text: "Real-world projects", negative: false },
      { text: "Industry-ready skills", negative: false },
      { text: "Gen AI integration", negative: false },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhyDigitalRebels = () => {
  const handleBookDemo = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements - More Subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/3 via-accent/3 to-secondary/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[80px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-accent/2 rounded-full blur-[60px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary/80 text-sm font-medium uppercase tracking-wider mb-6 border border-primary/20">
            The Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why{" "}
            <span className="text-gradient-rebel bg-gradient-to-r from-primary/90 via-accent/90 to-secondary/90 bg-clip-text text-transparent">
              Digital Rebels
            </span>?
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            The education system is broken. We're here to fix it with
            AI-integrated, industry-focused training.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {comparisonCards.map((card, index) => {
            const Icon = card.icon;
            const isRebel = card.color === "primary";

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: isRebel ? 1.02 : 1.01,
                  transition: { duration: 0.3 }
                }}
                className={`relative rounded-xl p-6 lg:p-8 backdrop-blur-sm transition-all duration-300 ${isRebel
                    ? `${card.bgColor} border ${card.borderColor} shadow-lg shadow-primary/5 hover:shadow-primary/10`
                    : `${card.bgColor} border ${card.borderColor} hover:border-opacity-60`
                  }`}
              >
                {/* Status Badge - More Subtle */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider mb-6 backdrop-blur-sm ${isRebel
                      ? "bg-gradient-to-r from-primary/15 to-accent/15 text-primary/80 border border-primary/25"
                      : card.title.includes("Traditional")
                        ? "bg-red-500/10 text-red-300/80 border border-red-500/20"
                        : "bg-yellow-500/10 text-yellow-300/80 border border-yellow-500/20"
                    }`}
                >
                  {card.status === "past" && "The Past"}
                  {card.status === "shortcuts" && "Shortcuts"}
                  {card.status === "future" && "The Future"}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`p-4 rounded-xl ${card.iconBg} backdrop-blur-sm border ${isRebel ? "border-primary/20" : card.borderColor
                      }`}
                  >
                    <Icon className={`w-7 h-7 ${card.iconColor}`} />
                  </div>
                  <h3
                    className={`font-display text-xl lg:text-2xl font-bold ${isRebel ? "text-foreground/90" : "text-muted-foreground/80"
                      }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Points - Reduced Contrast */}
                <ul className="space-y-4">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      {point.negative ? (
                        <div className="p-1 rounded-full bg-red-500/10">
                          <X className="w-4 h-4 text-red-400/70 flex-shrink-0" />
                        </div>
                      ) : (
                        <div className="p-1 rounded-full bg-accent/10">
                          <Check className="w-4 h-4 text-accent/80 flex-shrink-0" />
                        </div>
                      )}
                      <span
                        className={`text-sm lg:text-base ${point.negative
                            ? "text-muted-foreground/70"
                            : "text-foreground/80 font-medium"
                          }`}
                      >
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements - More Subtle */}
                {isRebel && (
                  <>
                    {/* Corner Badge - Reduced Opacity */}
                    <div className="absolute -top-px -right-px w-24 h-24 overflow-hidden rounded-tr-xl">
                      <div className="absolute top-0 right-0 w-[141%] h-6 bg-gradient-to-r from-primary/40 via-accent/40 to-secondary/40 transform rotate-45 translate-x-6 -translate-y-2" />
                    </div>

                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/3 to-accent/3 blur-xl -z-10" />
                  </>
                )}

                {/* Very Subtle Hover Effect for Non-Rebel Cards */}
                {!isRebel && (
                  <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/2 to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section - Now a Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="rebel"
            size="xl"
            className="cursor-pointer group"
            onClick={handleBookDemo}
          >
            <span className="mr-2">Ready to join the revolution?</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2" />
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          {/* Optional: Add a subtitle below the button */}
          <p className="text-sm text-muted-foreground/60 mt-4">
            Book your free demo and start your AI journey today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDigitalRebels;
