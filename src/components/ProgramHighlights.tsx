import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Bot,
  Sparkles,
  MessageSquare,
  Layers,
  Cpu,
} from "lucide-react";

const coreStack = [
  { icon: Code2, label: "Java & Spring Boot" },
  { icon: Layers, label: "Microservices" },
  { icon: Database, label: "Database Design" },
  { icon: Cloud, label: "REST APIs" },
];

const aiTrack = [
  { icon: Bot, label: "AI Agents" },
  { icon: Sparkles, label: "GenAI APIs" },
  { icon: MessageSquare, label: "Prompt Engineering" },
  { icon: Cpu, label: "AI Web Apps" },
];

const ProgramHighlights = () => {
  return (
    <section id="program" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wider mb-4">
            Our Program
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Java Full Stack with{" "}
            <span className="text-gradient-cyber">Gen AI</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master the complete stack from backend to AI integration. Build
            real-world applications that matter.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Core Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold">Core Stack</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {coreStack.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Enterprise-grade architecture patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Performance optimization & scaling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                Angular / React frontend mastery
              </li>
            </ul>
          </motion.div>

          {/* AI Track */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-secondary/50 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary/20">
                  <Bot className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl font-bold">AI Track</h3>
                <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                  NEW
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {aiTrack.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-secondary/10 border border-secondary/30 hover:border-secondary transition-colors"
                    >
                      <Icon className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <ul className="mt-6 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">→</span>
                  Build AI-powered applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">→</span>
                  LLM integration & fine-tuning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">→</span>
                  AI-first development mindset
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Class Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-muted/30 rounded-xl p-6 border border-border">
            <h4 className="font-display font-semibold mb-2">Mon – Fri</h4>
            <p className="text-muted-foreground">
              Live Online Classes — Core Stack & Projects
            </p>
          </div>
          <div className="bg-muted/30 rounded-xl p-6 border border-border">
            <h4 className="font-display font-semibold mb-2">Sat – Sun</h4>
            <p className="text-muted-foreground">
              AI Deep Dives & Career Development Sessions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
