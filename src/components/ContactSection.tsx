import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50 relative overflow-hidden">
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
          <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Book Your{" "}
            <span className="text-gradient-cyber">Free Demo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Still have questions? Book a free demo session or talk to our
            counselors. No obligations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              Register for Free Demo
            </h3>

            {/* Zoho Form Placeholder */}
            <div className="bg-muted/50 rounded-xl p-8 border border-dashed border-border text-center">
              <p className="text-muted-foreground mb-4">
                Zoho Form Integration
              </p>
              <p className="text-sm text-muted-foreground/70">
                Embed your Zoho form here with iframe
              </p>

              {/* Demo Form Fields */}
              <div className="mt-6 space-y-4 text-left">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-muted-foreground">
                  <option>I am a...</option>
                  <option>College Student</option>
                  <option>Fresher</option>
                  <option>Working Professional</option>
                  <option>Career Switcher</option>
                </select>
                <Button variant="rebel" className="w-full" size="lg">
                  Book Free Demo
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Contact Cards */}
            <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 98765 43211</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@digitalrebels.in</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                  <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-muted">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Hyderabad, Telangana, India
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    (Primarily Online Training)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="neon"
              size="xl"
              className="w-full mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
