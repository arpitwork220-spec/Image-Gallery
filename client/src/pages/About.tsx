import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            title="The Zestara Philosophy" 
            subtitle="We believe that nature has already provided the cure. We just bottle it."
            centered
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto text-muted-foreground"
          >
            <p className="mb-6">
              Founded on the belief that fast-paced lifestyles shouldn't compromise long-term health, 
              Zestara was created to bridge the gap between convenience and clinical nutrition.
            </p>
            <p className="mb-6">
              Our recipes aren't just random mixtures of fruit. They are carefully balanced formulas designed 
              by nutritionists to maximize absorption and bio-availability. We balance sugar content with 
              fiber and healthy fats to ensure you get energy without the crash.
            </p>
            <p>
              From sourcing local, organic produce to using glass bottles that are kind to the planet, 
              every decision we make is rooted in wellness—for you and the earth.
            </p>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
