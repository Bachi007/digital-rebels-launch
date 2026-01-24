import { motion } from "framer-motion";
import { GraduationCap, Building2, Rocket, X, Check } from "lucide-react";

const comparisonCards = [
  {
    title: "Traditional Colleges",
    icon: GraduationCap,
    status: "past",
    color: "muted",
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
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium uppercase tracking-wider mb-4">
            The Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why{" "}
            <span className="text-gradient-rebel">Digital Rebels</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className={`relative rounded-xl p-6 lg:p-8 ${
                  isRebel
                    ? "bg-card border-2 border-primary glow-orange"
                    : "bg-card/50 border border-border"
                } card-rebel`}
              >
                {/* Status Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-6 ${
                    isRebel
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {card.status === "past" && "= The Past"}
                  {card.status === "shortcuts" && "= Shortcuts"}
                  {card.status === "future" && "= The Future"}
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg ${
                      isRebel ? "bg-primary/20" : "bg-muted"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        isRebel ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-display text-xl font-bold ${
                      isRebel ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      {point.negative ? (
                        <X className="w-5 h-5 text-destructive flex-shrink-0" />
                      ) : (
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      )}
                      <span
                        className={
                          point.negative
                            ? "text-muted-foreground"
                            : "text-foreground"
                        }
                      >
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Element for Rebel Card */}
                {isRebel && (
                  <div className="absolute -top-px -right-px w-20 h-20 overflow-hidden rounded-tr-xl">
                    <div className="absolute top-0 right-0 w-[141%] h-4 bg-gradient-to-r from-primary to-accent transform rotate-45 translate-x-4 -translate-y-1" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDigitalRebels;
