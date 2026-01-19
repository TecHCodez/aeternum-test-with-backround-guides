import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const SecGenMessage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="message"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
              From Our Leadership
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Quote Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Quote Icon */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <Quote className="w-12 h-12 text-primary/40" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-foreground mb-8">
                “
                <span className="text-gradient-gold font-semibold">
                  Aeternum MUN
                </span>{" "}
                stands as a platform where ideas are challenged, diplomacy is refined,
                and leadership is forged. As delegates engage with complex global
                issues, we encourage integrity, collaboration, and vision. We look
                forward to welcoming you to a conference rooted in{" "}
                <span className="text-gradient-gold">excellence</span> and{" "}
                <span className="text-gradient-gold">purpose</span>.
                ”
              </blockquote>

              {/* Signature */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-16 h-px bg-primary mb-6" />
                <p className="font-signature text-3xl text-primary mb-2">
                  Secretary General
                </p>
                <p className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground">
                  Aeternum MUN 2026
                </p>
              </div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              className="lg:w-1/3 w-full max-w-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative group">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-primary/20 rounded-lg translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
                
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-secondary/50">
                  <img 
                    src="/images/leadership/sec-gen.jpg" 
                    alt="Secretary General of Aeternum MUN 2026"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
                
                {/* Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-3 rounded border border-border/50">
                  <p className="text-xs font-mono tracking-widest text-primary uppercase">Pratyush Kumar Samal</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default SecGenMessage;
