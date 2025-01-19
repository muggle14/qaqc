import { motion } from "framer-motion";
import { Layers, Paintbrush, PenTool } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-canvas-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-tool-primary/10 text-tool-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Design Without Limits
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold text-canvas-text mb-6 tracking-tight">
            Create Beautiful Designs with Ease
          </h1>
          
          <p className="text-lg text-canvas-muted mb-8 max-w-2xl mx-auto">
            Experience the next generation of design tools. Powerful, intuitive, and built for modern creators.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-tool-primary text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-tool-primary/20 hover:bg-tool-hover transition-colors duration-200"
          >
            Start Designing
          </motion.button>
        </motion.div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <FeatureIcon
            icon={<Layers className="w-6 h-6" />}
            label="Smart Layers"
            delay={0.2}
          />
          <FeatureIcon
            icon={<PenTool className="w-6 h-6" />}
            label="Vector Tools"
            delay={0.4}
          />
          <FeatureIcon
            icon={<Paintbrush className="w-6 h-6" />}
            label="Style Tools"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureIcon = ({ icon, label, delay }: { icon: React.ReactNode; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center gap-3"
  >
    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-black/5 flex items-center justify-center animate-float">
      {icon}
    </div>
    <span className="text-canvas-text font-medium">{label}</span>
  </motion.div>
);

export default Hero;