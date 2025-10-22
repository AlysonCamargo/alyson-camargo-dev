import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Music Playlist Manager",
    description: "Sistema completo de gerenciamento de playlists e músicas com interface moderna e backend robusto.",
    tech: ["Svelte", "Rust", "SQLite"],
    github: "https://github.com/AlysonCamargo/music-playlist-manager",
    demo: null,
    gradient: "from-primary to-secondary",
  },
  {
    name: "Distrito ZLG",
    description: "Site oficial da marca de streetwear “Distrito ZLG”, focado em performance, responsividade e estilo moderno.",
    tech: ["Vite", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/AlysonCamargo/distritozlg-site",
    demo: "https://distritozlg-site.vercel.app",
    gradient: "from-secondary to-accent",
  },
  {
    name: "Realtime Blog Platform",
    description: "Plataforma completa de blog com CRUD, busca em tempo real, estatísticas e interface moderna usando MEVN Stack.",
    tech: ["MongoDB", "Express", "Vue.js", "Node.js"],
    github: "https://github.com/AlysonCamargo/Realtime-Blog-Platform",
    demo: null,
    gradient: "from-accent to-primary",
  },
  {
    name: "AI Task Manager",
    description: "Sistema inteligente de gerenciamento de tarefas com API REST completa, banco de dados SQLite e recursos de IA para sugestões e priorização automática.",
    tech: ["Python", "Flask", "SQLite"],
    github: "https://github.com/AlysonCamargo/AI-Task-Manager",
    demo: null,
    gradient: "from-primary to-accent",
  },
  {
    name: "Pathfinding Visualizer",
    description: "Visualizador interativo de algoritmos de busca de caminho (pathfinding) com animações em tempo real e interface intuitiva.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/AlysonCamargo/Pathfinding-Visualizer",
    demo: "https://pathfinding-visualizer-ac.vercel.app/",
    gradient: "from-secondary to-primary",
  },
  {
    name: "Sorting Visualizer",
    description: "Uma aplicação web interativa para visualizar algoritmos de ordenação em tempo real com animações suaves e estatísticas detalhadas.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/AlysonCamargo/sorting-visualizer",
    demo: "https://sorting-visualizer-ac.vercel.app/",
    gradient: "from-secondary to-primary",
  },
  {
    name: "Realtime Chat System",
    description: "Sistema de chat em tempo real com múltiplas salas, mensagens instantâneas e lista de usuários online.",
    tech: ["Angular", "Go", "Redis", "WebSockets"],
    github: "https://github.com/AlysonCamargo/realtime-chat-system",
    demo: null,
    gradient: "from-secondary to-primary",
  },
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-purple">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-purple mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg">
            Confira alguns dos meus trabalhos recentes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 h-full flex flex-col">
                {/* Gradient header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient-neon transition-all">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
