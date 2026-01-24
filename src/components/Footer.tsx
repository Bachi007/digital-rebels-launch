import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Digital Rebels" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Digital Rebels is not a coaching institute. It is a
              career-transformation movement for the AI age.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#program"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Why Digital Rebels
                </a>
              </li>
              <li>
                <a
                  href="#who-should-join"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Who Should Join
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Digital Rebels. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with 🔥 for rebels who dare to dream.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
