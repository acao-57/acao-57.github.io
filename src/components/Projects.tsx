import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern technologies for optimal performance and user experience.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "#",
    external: "#",
    image: "from-primary/20 to-secondary",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates, drag-and-drop functionality, and team collaboration features. Designed for seamless productivity workflows.",
    tech: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    github: "#",
    external: "#",
    image: "from-secondary to-primary/20",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content creation platform leveraging machine learning to generate, optimize, and analyze content. Features include SEO optimization and multi-language support.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "MongoDB"],
    github: "#",
    external: "#",
    image: "from-primary/30 to-muted",
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "A beautiful weather app with location-based forecasts, interactive maps, and weather alerts.",
    tech: ["React", "API", "Chart.js"],
    github: "#",
    external: "#",
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers with dark mode and animation support.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    external: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with private messaging, group chats, and file sharing capabilities.",
    tech: ["Socket.io", "Express", "MongoDB"],
    github: "#",
    external: "#",
  },
  {
    title: "Budget Tracker",
    description: "Personal finance app with expense tracking, budget goals, and visual analytics.",
    tech: ["React Native", "Firebase"],
    github: "#",
    external: "#",
  },
  {
    title: "Recipe Finder",
    description: "Find recipes based on ingredients you have, with nutritional info and meal planning.",
    tech: ["Vue.js", "Spoonacular API"],
    github: "#",
    external: "#",
  },
  {
    title: "Markdown Editor",
    description: "A minimalist markdown editor with live preview, syntax highlighting, and export options.",
    tech: ["React", "CodeMirror"],
    github: "#",
    external: "#",
  },
];

const FeaturedProject = ({
  project,
  index,
  isInView,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  isInView: boolean;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative grid md:grid-cols-12 gap-4 items-center mb-24"
    >
      <div
        className={`md:col-span-7 relative ${isEven ? "md:col-start-1" : "md:col-start-6"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`aspect-video rounded-lg bg-gradient-to-br ${project.image} overflow-hidden relative group cursor-pointer`}
        >
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-2xl text-primary/50">
              Project Preview
            </span>
          </div>
        </motion.div>
      </div>

      <div
        className={`md:col-span-6 relative z-10 ${
          isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:row-start-1"
        }`}
      >
        <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
        <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
          <a href={project.external}>{project.title}</a>
        </h3>
        <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <ul
          className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
            isEven ? "md:justify-end" : ""
          }`}
        >
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className={`flex gap-4 ${isEven ? "md:justify-end" : ""}`}>
          <a
            href={project.github}
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={project.external}
            className="text-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof otherProjects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        animate={{ y: isHovered ? -8 : 0 }}
        className="bg-card p-6 rounded-lg h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 border border-transparent hover:border-primary/20"
      >
        <div className="flex items-center justify-between mb-6">
          <Folder className="text-primary" size={40} />
          <div className="flex gap-3">
            <a
              href={project.github}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={project.external}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 text-3xl font-bold text-foreground mb-16"
        >
          <span className="text-primary font-mono text-xl">02.</span>
          Things I've Built
          <span className="h-px bg-border flex-1 ml-4 max-w-xs" />
        </motion.h2>

        {/* Featured Projects */}
        <div className="mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-2xl font-bold text-foreground mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
