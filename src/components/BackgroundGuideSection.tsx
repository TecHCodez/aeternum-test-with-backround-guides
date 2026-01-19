import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download } from "lucide-react";

const BackgroundGuideSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="background-guide"
      className="relative py-24 lg:py-32 overflow-hidden bg-secondary/10"
    >
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-primary uppercase">
            Resources
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Committee <span className="text-gradient-gold">Background Guides</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential research materials and procedural guidelines for all delegates.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {['UNHRC', 'DISEC', 'AIPPM', 'IP'].map((committee, index) => (
            <motion.div
              key={committee}
              className="card-diplomatic p-6 flex items-center justify-between group hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">{committee}</h3>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Background Guide 2026</p>
                </div>
              </div>
              <button className="p-3 rounded-full border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Download size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default BackgroundGuideSection;
