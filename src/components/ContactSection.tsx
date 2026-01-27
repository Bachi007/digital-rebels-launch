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
              {/* <p className="text-muted-foreground mb-4">
                Zoho Form Integration
              </p>
              <p className="text-sm text-muted-foreground/70">
                Embed your Zoho form here with iframe
              </p> */}

              {/* Demo Form Fields */}
              <div className="mt-6 space-y-4 text-left">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                {/* <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-muted-foreground">
                  <option>Select Course</option>
                  <option>Java with Gen AI</option>
                  <option>Mean Stack</option>
                  <option>Mern Stack</option>
                </select> */}
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-muted-foreground">
                  <option>Qualification</option>
                  <option>B.Tech</option>
                  <option>Bsc/BCA</option>
                  <option>Msc/MCA</option>
                </select>
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-muted-foreground">
                  <option>Year Of Passing</option>
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
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
                  <p className="text-muted-foreground">+91 90590 65724</p>
                  <p className="text-muted-foreground">+91 93908 29318</p>
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

// export default ContactSection;
// import { motion } from "framer-motion";
// import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-24 bg-card/50 relative overflow-hidden">
//       <div className="absolute inset-0 cyber-grid opacity-10" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium uppercase tracking-wider mb-4">
//             Get In Touch
//           </span>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             Book Your <span className="text-gradient-cyber">Free Demo</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Still have questions? Book a free demo session or talk to our
//             counselors. No obligations.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Zoho Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="bg-card rounded-2xl p-8 border border-border"
//           >
//             <h3 className="font-display text-2xl font-bold mb-6">
//               Register for Free Demo
//             </h3>

//             <form
//               action="https://forms.zohopublic.in/rahulrocks9876543210gm1/form/contact/formperma/6Zu6TOo9WZsgyy4aBgwz0sJJCfLnrHn4JTevxnYu-bI/htmlRecords/submit"
//               method="POST"
//               acceptCharset="UTF-8"
//               encType="multipart/form-data"
//               className="space-y-4"
//             >
//               {/* Hidden Zoho Fields */}
//               <input type="hidden" name="zf_referrer_name" value="" />
//               <input type="hidden" name="zf_redirect_url" value="" />
//               <input type="hidden" name="zc_gad" value="" />

//               {/* First + Last Name */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="Name_First"
//                   maxLength={255}
//                   placeholder="First Name"
//                   className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//                 />

//                 <input
//                   type="text"
//                   name="Name_Last"
//                   maxLength={255}
//                   placeholder="Last Name"
//                   className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//                 />
//               </div>

//               {/* Phone */}
//               <input
//                 type="text"
//                 name="PhoneNumber_countrycode"
//                 id="international_PhoneNumber_countrycode"
//                 maxLength={20}
//                 placeholder="Phone Number"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 name="Email"
//                 maxLength={255}
//                 placeholder="Email Address"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//               />

//               {/* Course */}
//               <select
//                 name="Dropdown"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//               >
//                 <option value="-Select-">Select Course</option>
//                 <option value="Java with Gen AI">Java with Gen AI</option>
//                 <option value="MEAN Stack">MEAN Stack</option>
//                 <option value="MERN Stack">MERN Stack</option>
//               </select>

//               {/* Qualification */}
//               <select
//                 name="Dropdown1"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//               >
//                 <option value="-Select-">Qualification</option>
//                 <option value="Btech">Btech</option>
//                 <option value="Bsc/BCA">Bsc/BCA</option>
//                 <option value="MCA/MSC">MCA/MSC</option>
//               </select>

//               {/* Year */}
//               <select
//                 name="Dropdown2"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary"
//               >
//                 <option value="-Select-">Year of Passing</option>
//                 <option value="2026">2026</option>
//                 <option value="2025">2025</option>
//                 <option value="2024">2024</option>
//               </select>

//               {/* Reason */}
//               <textarea
//                 name="MultiLine"
//                 maxLength={65535}
//                 rows={4}
//                 placeholder="Why did you select this course?"
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary resize-none"
//               />

//               {/* Submit */}
//               <Button
//                 type="submit"
//                 variant="rebel"
//                 size="lg"
//                 className="w-full"
//               >
//                 Book Free Demo
//               </Button>
//             </form>
//           </motion.div>

//           {/* Right Panel unchanged */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col gap-6"
//           >
//             {/* Cards */}
//             <div className="bg-card rounded-xl p-6 border border-border">
//               <div className="flex gap-4">
//                 <Phone className="text-primary" />
//                 <div>
//                   <p>+91 9059065724</p>
//                   <p>+91 9390829318</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-card rounded-xl p-6 border border-border hover:border-secondary/50 transition-colors"> <div className="flex items-start gap-4"> <div className="p-3 rounded-lg bg-secondary/10"> <Mail className="w-5 h-5 text-secondary" /> </div> <div> <h4 className="font-semibold mb-1">Email Us</h4> <p className="text-muted-foreground">hello@digitalrebels.in</p> </div> </div> </div> <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"> <div className="flex items-start gap-4"> <div className="p-3 rounded-lg bg-accent/10"> <Clock className="w-5 h-5 text-accent" /> </div> <div> <h4 className="font-semibold mb-1">Office Hours</h4> <p className="text-muted-foreground"> Mon - Sat: 9:00 AM - 8:00 PM </p> <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p> </div> </div> </div> <div className="bg-card rounded-xl p-6 border border-border"> <div className="flex items-start gap-4"> <div className="p-3 rounded-lg bg-muted"> <MapPin className="w-5 h-5 text-muted-foreground" /> </div> <div> <h4 className="font-semibold mb-1">Location</h4> <p className="text-muted-foreground"> Hyderabad, Telangana, India </p> <p className="text-sm text-muted-foreground/70"> (Primarily Online Training) </p> </div> </div> </div> {/* WhatsApp CTA */} <a href="https://wa.me/918501003087?text=Hi%20Digital%20Rebels,%20I%20want%20to%20book%20a%20free%20demo%20session." target="_blank" rel="noopener noreferrer" className="w-full" > <Button variant="neon" size="xl" className="w-full mt-4" > <MessageCircle className="w-5 h-5" /> Chat on WhatsApp </Button> </a> </motion.div> </div> </div> </section>);
// };
export default ContactSection;
