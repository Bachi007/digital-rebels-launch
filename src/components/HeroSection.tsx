import { motion } from "framer-motion";
import { ArrowRight, Play, Clock, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const handleBookDemo = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinMovement = () => {  
    const pdfUrl = '/curriculum.pdf';

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Digital-Rebels-Java-Curriculum.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => {
      window.open(pdfUrl, '_blank');
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Tag Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center mb-8"
          >
            <Badge className="bg-neon-orange/20 text-neon-orange border border-neon-orange/30 px-6 py-3 text-sm font-medium animate-pulse-glow backdrop-blur-sm">
              <Clock className="w-4 h-4 mr-2" />
              Next Batch Starts Feb 15 — Only 25 Seats Left
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            THIS IS NOT A{" "}
            <span className="text-gradient-rebel">CLASSROOM.</span>
            <br />
            THIS IS A{" "}
            <span className="text-gradient-cyber">MOVEMENT.</span>
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            <span className="font-display font-semibold text-foreground">
              Java Full Stack with Gen AI
            </span>{" "}
            — Built for the AI Corporate World. Transform from a coder to an
            AI-ready professional.
          </motion.p>

          {/* Program Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8"
          >
            <div className="flex items-center gap-2 text-white/90 bg-card/30 px-4 py-2 rounded-lg border border-neon-green/20 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-neon-green" />
              <span className="text-sm md:text-base">3-Month Intensive Program</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-card/30 px-4 py-2 rounded-lg border border-primary/20 backdrop-blur-sm">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base">Mentorship Included</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-card/30 px-4 py-2 rounded-lg border border-neon-blue/20 backdrop-blur-sm">
              <ArrowRight className="w-5 h-5 text-neon-blue" />
              <span className="text-sm md:text-base">Job Placement Support</span>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/70 text-sm mb-12"
          >
            <span className="flex items-center gap-2 bg-card/20 px-3 py-2 rounded-lg border border-neon-green/10">
              <span className="text-neon-green">✓</span>
              100% Money-Back Guarantee
            </span>
            <span className="flex items-center gap-2 bg-card/20 px-3 py-2 rounded-lg border border-neon-orange/10">
              <span className="text-neon-orange">✓</span>
              No Prior Experience Needed
            </span>
            <span className="flex items-center gap-2 bg-card/20 px-3 py-2 rounded-lg border border-neon-blue/10">
              <span className="text-neon-blue">✓</span>
              Weekend-Friendly Schedule
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              variant="rebel"
              size="xl"
              className="w-full sm:w-auto cursor-pointer"
              onClick={handleBookDemo}
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="cyber-outline"
              size="xl"
              className="w-full sm:w-auto cursor-pointer"
              onClick={handleJoinMovement}
            >
              Download Curriculum PDF
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { value: "500+", label: "Students Trained" },
              { value: "95%", label: "Placement Rate" },
              { value: "50+", label: "Hiring Partners" },
              { value: "4.9★", label: "Student Rating" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
export default HeroSection;
// import { motion } from "framer-motion";
// import { ArrowRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//     >
//       {/* Cyber Grid Background */}
//       <div className="absolute inset-0 cyber-grid opacity-30" />

//       {/* Gradient Orbs */}
//       <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
//       <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse-glow" />

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-5xl mx-auto text-center">
//           {/* Tag Line */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-8"
//           >
//             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
//             <span className="text-sm font-medium text-primary uppercase tracking-wider">
//               Admissions Open — Limited Seats
//             </span>
//           </motion.div>

//           {/* Main Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
//           >
//             THIS IS NOT A{" "}
//             <span className="text-gradient-rebel">CLASSROOM.</span>
//             <br />
//             THIS IS A{" "}
//             <span className="text-gradient-cyber">MOVEMENT.</span>
//           </motion.h1>

//           {/* Sub Headline */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
//           >
//             <span className="font-display font-semibold text-foreground">
//               Java Full Stack with Gen AI
//             </span>{" "}
//             — Built for the AI Corporate World. Transform from a coder to an
//             AI-ready professional.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           >
//             <Button variant="rebel" size="xl" className="w-full sm:w-auto">
//               Book Free Demo
//               <ArrowRight className="w-5 h-5" />
//             </Button>
//             <Button variant="cyber-outline" size="xl" className="w-full sm:w-auto">
//               <Play className="w-5 h-5" />
//               Join the Movement
//             </Button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
//           >
//             {[
//               { value: "500+", label: "Students Trained" },
//               { value: "95%", label: "Placement Rate" },
//               { value: "50+", label: "Hiring Partners" },
//               { value: "4.9★", label: "Student Rating" },
//             ].map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-4 rounded-lg bg-card/50 border border-border"
//               >
//                 <div className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-muted-foreground">{stat.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
//     </section>
//   );
// };

// export default HeroSection;
