import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, FileText, MessageCircle, Gift, ArrowRight, Clock, Users, Zap, X } from "lucide-react";

const trialIncludes = [
    {
        icon: Play,
        title: "Full Lesson: Spring Boot + AI Basics",
        description: "60-minute masterclass on building your first AI-powered API",
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        icon: FileText,
        title: "Complete Curriculum PDF",
        description: "Detailed 24-week roadmap with all topics covered",
        color: "text-accent",
        bgColor: "bg-accent/10",
    },
    {
        icon: MessageCircle,
        title: "15-Min Career Consultation",
        description: "1:1 call to discuss your goals and how we can help",
        color: "text-secondary",
        bgColor: "bg-secondary/10",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.2 }
    }
};

const FreeTrial = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const handleGetFreeAccess = () => {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleWatchVideo = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    // Sample video URL - replace with your actual video
    const sampleVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your video URL

    return (
        <>
            <section className="py-20 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-2xl overflow-hidden hover:shadow-primary/10 transition-all duration-500">
                            <CardContent className="p-0">
                                <div className="grid lg:grid-cols-2">
                                    {/* Left side - Content */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="p-8 md:p-12 lg:p-16"
                                    >
                                        <Badge className="mb-6 bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                            <Gift className="w-4 h-4 mr-2" />
                                            Free Preview Access
                                        </Badge>

                                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                                            Try Before You{" "}
                                            <span className="text-gradient-rebel bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                                Commit
                                            </span>
                                        </h2>

                                        <p className="text-lg text-muted-foreground/80 mb-8 leading-relaxed">
                                            Not sure if this is right for you? Get a taste of our teaching style
                                            and curriculum quality — completely free.
                                        </p>

                                        <div className="space-y-6 mb-10">
                                            {trialIncludes.map((item, index) => {
                                                const Icon = item.icon;
                                                return (
                                                    <motion.div
                                                        key={index}
                                                        variants={itemVariants}
                                                        className="flex gap-4 group"
                                                    >
                                                        <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                                                            <Icon className={`w-6 h-6 ${item.color}`} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="font-display font-semibold text-foreground text-base mb-1">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground/70 leading-relaxed">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>

                                        <motion.div variants={itemVariants}>
                                            <Button
                                                variant="rebel"
                                                size="xl"
                                                className="w-full mb-4 cursor-pointer"
                                                onClick={handleGetFreeAccess}
                                            >
                                                Get Free Access Now
                                                <ArrowRight className="w-5 h-5" />
                                            </Button>

                                            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground/60">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    No credit card required
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Zap className="w-3 h-3" />
                                                    Instant access
                                                </span>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Right side - Visual */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center p-8 lg:p-12 min-h-[400px] relative overflow-hidden"
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 cyber-grid opacity-10" />

                                        <div className="text-center relative z-10">
                                            <motion.div
                                                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-primary/20 shadow-2xl cursor-pointer"
                                                whileHover={{
                                                    scale: 1.1,
                                                    boxShadow: "0 0 40px rgba(255, 107, 0, 0.3)"
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{ duration: 0.3 }}
                                                onClick={handleWatchVideo}
                                            >
                                                <Play className="w-16 h-16 text-primary ml-2" />
                                            </motion.div>

                                            <h3 className="font-display text-xl font-bold text-foreground mb-2">
                                                Watch Free Lesson
                                            </h3>
                                            <p className="text-sm text-muted-foreground/70 mb-4">
                                                60 minutes of hands-on learning
                                            </p>

                                            <Button
                                                variant="cyber-outline"
                                                size="sm"
                                                className="mb-4 cursor-pointer"
                                                onClick={handleWatchVideo}
                                            >
                                                <Play className="w-4 h-4 mr-2" />
                                                Play Now
                                            </Button>

                                            {/* Stats */}
                                            <div className="flex items-center justify-center gap-6 text-xs">
                                                <div className="flex items-center gap-1 text-primary/80">
                                                    <Users className="w-3 h-3" />
                                                    <span>500+ watched</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-accent/80">
                                                    <span>⭐</span>
                                                    <span>4.9/5 rating</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20 bg-accent/10 rounded-full blur-xl" />
                                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg" />
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Trust Indicators */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs text-muted-foreground/50"
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-accent">✓</span>
                                Trusted by 500+ students
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-primary">✓</span>
                                Industry-approved curriculum
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-secondary">✓</span>
                                100% satisfaction guarantee
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeVideoModal}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            transition: { duration: 0.2 }
                        }}
                        className="relative w-full max-w-4xl bg-card rounded-xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border bg-card/95 backdrop-blur-sm">
                            <div>
                                <h3 className="font-display text-lg font-bold text-foreground">
                                    Spring Boot + AI Basics - Free Lesson
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    60-minute masterclass on building AI-powered APIs
                                </p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={closeVideoModal}
                                className="hover:bg-destructive/20 hover:text-destructive"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Video Player */}
                        <div className="relative aspect-video bg-black">
                            <video
                                className="w-full h-full"
                                controls
                                autoPlay
                                poster="/api/placeholder/800/450" // Optional: Add a poster image
                            >
                                <source src={sampleVideoUrl} type="video/mp4" />
                                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 bg-card/95 backdrop-blur-sm border-t border-border">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div className="text-center sm:text-left">
                                    <p className="text-sm text-muted-foreground">
                                        Enjoying this lesson? Get access to the full curriculum.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        variant="cyber-outline"
                                        size="sm"
                                        onClick={closeVideoModal}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant="rebel"
                                        size="sm"
                                        onClick={() => {
                                            closeVideoModal();
                                            handleGetFreeAccess();
                                        }}
                                    >
                                        Enroll Now
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default FreeTrial;
