import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about", id: "about" },
  { name: "Committees", href: "/committee", id: "committees" },
  { name: "Message", href: "/messages", id: "message" },
  { name: "FAQ", href: "/faq", id: "faq" },
  { name: "Background Guide", href: "/background-guide", id: "background-guide" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without reload if possible, or just navigate
      window.history.pushState(null, "", href);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-serif font-bold tracking-wide text-gradient-gold">
                Aeternum <span className="ml-1">MUN</span>
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase">
                2026
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 underline-gold"
                >
                  {link.name}
                </button>
              ))}

              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-diplomatic text-xs"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-lg lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => handleNavClick(link.href, link.id)}
              className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.name}
            </motion.button>
          ))}

          <motion.a
            href="https://forms.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{
              duration: 0.3,
              delay: navLinks.length * 0.1,
            }}
          >
            Register Now
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
