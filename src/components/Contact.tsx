import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/AlysonCamargo",
    color: "hover:text-primary",
    gradient: "from-primary to-secondary",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/alyson-camargo-49b476242/",
    color: "hover:text-secondary",
    gradient: "from-secondary to-accent",
  },
  {
    name: "E-mail",
    icon: Mail,
    url: "mailto:alysoncamar@gmail.com",
    color: "hover:text-accent",
    gradient: "from-accent to-primary",
  },
  {
    name: "Whatsapp",
    icon: Phone,
    url: "https://wa.me/5511941497375",
    color: "hover:text-primary",
    gradient: "from-primary to-accent",
  },
];

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-neon">Vamos criar algo juntos?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Button
                variant="outline"
                size="lg"
                className={`w-full h-full flex flex-col items-center gap-3 p-6 border-2 border-border ${link.color} transition-all duration-300 hover:scale-105 hover:border-primary group relative overflow-hidden`}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <link.icon className="w-8 h-8 relative z-10" />
                  <span className="text-sm font-semibold relative z-10">{link.name}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Ou me envie um e-mail diretamente:{" "}
            <a
              href="mailto:alysoncamar@gmail.com"
              className="text-primary font-semibold hover:underline"
            >
              alysoncamar@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
