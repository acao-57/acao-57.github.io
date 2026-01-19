import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <p className="mt-2 text-xs">© {new Date().getFullYear()} Amy Cao. All rights reserved</p>
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;