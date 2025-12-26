import { Link, useLocation } from "wouter";
import { Button } from "./Button";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/919660254489?text=Hi%20Zestara%2C%20I%20want%20to%20start%20my%2030-day%20personalised%20nutrition%20plan.";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "Process" },
    { href: "/menu", label: "Menu" },
    { href: "/subscription", label: "Plan" },
    { href: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-secondary/30">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <span className="font-display text-2xl md:text-3xl font-semibold text-primary tracking-tight cursor-pointer">
                Zestara.
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      location === link.href ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="ml-4">Start 30-Day Plan</Button>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <span
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-2xl font-display font-medium cursor-pointer ${
                          location === link.href ? "text-primary" : "text-foreground/60"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ))}
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button size="lg" className="mt-4">Start 30-Day Plan</Button>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-white border-t border-border py-16 mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <span className="font-display text-2xl font-semibold text-primary">Zestara.</span>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reclaiming your health through mindful, daily nutrition. 
                Science-backed, nature-delivered.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about"><span className="hover:text-primary cursor-pointer">About Us</span></Link></li>
                <li><Link href="/how-it-works"><span className="hover:text-primary cursor-pointer">Process</span></Link></li>
                <li><Link href="/menu"><span className="hover:text-primary cursor-pointer">Our Menu</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Plan</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/personalisation"><span className="hover:text-primary cursor-pointer">Personalisation</span></Link></li>
                <li><Link href="/subscription"><span className="hover:text-primary cursor-pointer">Subscription</span></Link></li>
                <li><a href={WHATSAPP_URL} className="hover:text-primary">Contact via WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary hover:bg-secondary/20 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary hover:bg-secondary/20 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Zestara Wellness. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
