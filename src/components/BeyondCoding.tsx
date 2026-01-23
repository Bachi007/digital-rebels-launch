import { motion } from "framer-motion";
import { Brain, Briefcase, TrendingUp, Users } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "System Thinking",
    description:
      "Learn to architect solutions, not just write code. Think in systems, not scripts.",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Corporate Readiness",
    description:
      "Understand how tech companies work. Navigate politics, processes, and culture.",
    color: "secondary",
  },
  {
    icon: TrendingUp,
    title: "Financial Awareness",
    description:
      "Negotiate salaries, understand equity, and make smart career investments.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Soft Skills Mastery",
    description:
      "Communicate effectively, lead teams, and present ideas with confidence.",
    color: "primary",
  },
];

const BeyondCoding = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium uppercase tracking-wider mb-4">
            Holistic Growth
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Beyond <span className="text-gradient-neon">Coding</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just create coders. We create complete professionals ready
            to thrive in the corporate world.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClasses = {
              primary: {
                bg: "bg-primary/10",
                text: "text-primary",
                border: "border-primary/30 hover:border-primary",
                glow: "hover:shadow-[0_0_30px_hsl(24_100%_50%/0.3)]",
              },
              secondary: {
                bg: "bg-secondary/10",
                text: "text-secondary",
                border: "border-secondary/30 hover:border-secondary",
                glow: "hover:shadow-[0_0_30px_hsl(191_100%_50%/0.3)]",
              },
              accent: {
                bg: "bg-accent/10",
                text: "text-accent",
                border: "border-accent/30 hover:border-accent",
                glow: "hover:shadow-[0_0_30px_hsl(110_100%_62%/0.3)]",
              },
            };

            const colors = colorClasses[skill.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-card rounded-xl p-6 border ${colors.border} ${colors.glow} transition-all duration-300`}
              >
                <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BeyondCoding;
