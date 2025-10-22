import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            Desenvolvido por{" "}
            <span className="text-gradient-neon font-semibold glow-neon">
              Alyson Camargo
            </span>{" "}
            © 2025
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Feito com React, TypeScript e Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
