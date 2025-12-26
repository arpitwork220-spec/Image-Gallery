import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "white" | "primary" | "secondary";
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
  const backgrounds = {
    default: "bg-background",
    white: "bg-white",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary/20",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative",
        backgrounds[background],
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true, className }: { title: string, subtitle?: string, centered?: boolean, className?: string }) {
  return (
    <div className={cn("mb-16 max-w-3xl", centered && "mx-auto text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
