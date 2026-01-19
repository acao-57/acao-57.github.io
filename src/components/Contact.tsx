import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/acao-57", label: "github.com/acao-57" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/acaocs", label: "linkedin.com/in/acaocs" },
  { name: "Email", icon: Mail, href: "mailto:amy_cao@mines.edu", label: "amy_cao@mines.edu" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. Feel free to reach out,
            thanks for stopping by!
          </p>

          <motion.a
            href="mailto:amy_cao@mines.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-transparent border-2 border-primary text-primary font-mono text-lg rounded-lg hover:bg-primary/10 transition-all duration-300 mb-16"
          >
            Say Hello
          </motion.a>

          <div className="flex flex-col items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
                <span className="font-mono text-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;