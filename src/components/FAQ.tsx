import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
    {
        question: "I have no coding experience. Can I still join?",
        answer: "Yes! Our program is designed for beginners. We start from Java fundamentals and progressively build up to advanced concepts. All you need is dedication and 10-15 hours per week to commit to learning.",
    },
    {
        question: "What if I'm already a developer but stuck at junior level?",
        answer: "This program is perfect for you. We focus heavily on senior-level skills like system design, microservices architecture, and AI integration — exactly what interviewers look for in ₹12+ LPA candidates.",
    },
    {
        question: "How is this different from free YouTube tutorials?",
        answer: "YouTube teaches concepts in isolation. We provide a structured curriculum, real production projects, 1:1 mentorship, code reviews, and job placement support. Our students don't just learn — they get hired.",
    },
    {
        question: "What's the time commitment required?",
        answer: "Plan for 10-15 hours per week. Classes are designed to be weekend-friendly, with recorded sessions for flexibility. We also have a supportive community for async help.",
    },
    {
        question: "Do you guarantee a job after completion?",
        answer: "We guarantee interview opportunities, not jobs (no ethical program can). However, our curriculum is designed around what companies actually ask in interviews. We also provide mock interviews, resume reviews, and access to our referral network.",
    },
    {
        question: "What if I don't like the program after enrolling?",
        answer: "We offer a 100% money-back guarantee. Complete the program, apply our methods. If you don't land interviews within 3 months of finishing, we'll refund your entire payment. No questions asked.",
    },
    {
        question: "Can I pay in EMIs?",
        answer: "Yes! We offer flexible EMI options starting from ₹8,333/month for 6 months. We've partnered with payment providers to offer 0% interest EMI on select cards.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="py-20 bg-black relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 via-transparent to-neon-blue/5" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-3xl animate-pulse-glow" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-gradient-neon text-black font-bold px-4 py-2 animate-gradient-shift bg-[length:200%_200%]">
                        FAQ
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 bg-gradient-cyber bg-clip-text text-transparent">
                        Got Questions?
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Here are answers to the most common questions we receive
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-gray-900/50 border border-neon-blue/20 rounded-lg px-6 backdrop-blur-sm hover:border-neon-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-orange/10"
                            >
                                <AccordionTrigger className="text-left text-white hover:no-underline hover:text-neon-orange transition-colors duration-300 font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-neon-green rounded-full animate-pulse-glow" />
                <div className="absolute bottom-10 left-10 w-2 h-2 bg-neon-orange rounded-full animate-pulse-glow" />
                <div className="absolute top-1/2 right-20 w-1 h-1 bg-neon-blue rounded-full animate-pulse-glow" />
            </div>
        </section>
    );
};

export default FAQ;
