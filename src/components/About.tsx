import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import avatar from "@/assets/avatar.png";
import { Code2, Database, Smartphone, Settings } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { icon: Code2, label: "Frontend", tech: "React, Next.js, TypeScript, JavaScript, Vue, SvelteKit, HTML & CSS" },
    { icon: Settings, label: "Backend", tech: "Python, Rust, Express, APIs REST, Node.js" },
    { icon: Smartphone, label: "Mobile", tech: "Flutter, Dart, Android, iOS" },
    { icon: Database, label: "Banco de Dados", tech: "SQLite, MongoDB, PostgreSQL" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-neon">Sobre Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-neon blur-2xl opacity-30 rounded-full" />
              <img
                src={avatar}
                alt="Alyson Camargo"
                className="relative w-72 h-72 rounded-full border-4 border-primary object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou desenvolvedor full stack com experiência em{" "}
              <span className="text-primary font-semibold">Desenvolvimento Web</span>,{" "}
              <span className="text-secondary font-semibold">Frameworks</span> e{" "}
              <span className="text-accent font-semibold">Mobile.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crio projetos que combinam tecnologia, design e propósito. De sistemas
              analíticos a experiências interativas. Cada linha de código é uma
              oportunidade de transformar ideias em realidade.
            </p>

            <div className="grid gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.label}</h3>
                    <p className="text-sm text-muted-foreground">{skill.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
