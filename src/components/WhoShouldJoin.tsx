import { motion } from "framer-motion";
import { GraduationCap, UserSearch, Briefcase, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const personas = [
  {
    icon: GraduationCap,
    title: "College Students",
    subtitle: "2nd to 4th Year BTech/MCA",
    description:
      "Your college syllabus is outdated. Get industry skills while still in college and graduate job-ready.",
    highlight: "Start Early, Win Big",
  },
  {
    icon: UserSearch,
    title: "Freshers",
    subtitle: "Recent Graduates",
    description:
      "No job offers yet? It's not you — it's your skills. Upgrade to AI-era technologies and stand out.",
    highlight: "Transform Your Profile",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    subtitle: "1-5 Years Experience",
    description:
      "Feeling stuck or outdated? Learn Gen AI integration and future-proof your career before it's too late.",
    highlight: "Stay Relevant",
  },
  {
    icon: RefreshCw,
    title: "Career Switchers",
    subtitle: "Non-IT to IT",
    description:
      "Want to break into tech? Our comprehensive program takes you from zero to industry-ready in months.",
    highlight: "New Career Path",
  },
];

const WhoShouldJoin = () => {
  return (
    <section
      id="who-should-join"
      className="py-24 bg-card/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

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
            For You
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Who Should{" "}
            <span className="text-gradient-rebel">Join</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Digital Rebels is for those who refuse to be left behind. Are you
            one of us?
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(24_100%_50%/0.15)]"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      {persona.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {persona.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{persona.description}</p>

                {/* Highlight */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {persona.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
         <Link to="eligibility">
           <Button variant="rebel" size="xl">
            Check If You Qualify
            <ArrowRight className="w-5 h-5" />
          </Button>
         </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;
