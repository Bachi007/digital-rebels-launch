import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Program", href: "#program" },
  { name: "Why Us", href: "#why-us" },
  { name: "Who Should Join", href: "#who-should-join" },
  { name: "Contact", href: "#contact" },
  { name: "FAQs", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleBookDemo = () => {
    setIsOpen(false); 
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <img src={logo} alt="Digital Rebels" className="h-20 md:h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="rebel"
              size="lg"
              onClick={handleBookDemo}
              className="cursor-pointer"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
              {/* CTA Button - Mobile */}
              <Button
                variant="rebel"
                className="w-full mt-2 cursor-pointer"
                onClick={handleBookDemo}
              >
                Book Free Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "Program", href: "#program" },
//   { name: "Why Us", href: "#why-us" },
//   { name: "Who Should Join", href: "#who-should-join" },
//   { name: "Contact", href: "#contact" },

// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-3">
//             <img src={logo} alt="Digital Rebels" className="h-20 md:h-20 w-auto" />
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 uppercase tracking-wider"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//         <a href="#contact">
//           <div className="hidden md:block">
//             <Button variant="rebel" size="lg">
//               Book Free Demo
//             </Button>
//           </div>
//         </a>
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-card border-b border-border"
//           >
//             <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 uppercase tracking-wider"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <Button variant="rebel" className="w-full mt-2">
//                 Book Free Demo
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;
