import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { motion } from "framer-motion";
import { useMenu } from "@/hooks/use-menu";

// Static imports
import juiceOrange from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_(1)_1766769518504.jpeg";
import juiceRed from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_(2)_1766769518504.jpeg";
import juicePurple from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_(3)_1766769518503.jpeg";
import juicePink from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_(4)_1766769518501.jpeg";
import juiceYellow from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_1766769518506.jpeg";
import bowlKiwi from "@assets/WhatsApp_Image_2025-12-25_at_2.27.29_PM_(1)_1766769518505.jpeg";
import bowlMixed from "@assets/WhatsApp_Image_2025-12-25_at_2.27.29_PM_1766769518507.jpeg";
import bowlAcai from "@assets/WhatsApp_Image_2025-12-25_at_2.31.10_PM_1766769518508.jpeg";

// Hardcoded items for MVP display (fallback/primary data)
const STATIC_MENU = [
  { id: 1, name: "Sunrise Citrus", category: "Juices", image: juiceOrange, desc: "Orange, Carrot, Ginger, Turmeric" },
  { id: 2, name: "Beet Reset", category: "Juices", image: juiceRed, desc: "Beetroot, Apple, Lemon, Mint" },
  { id: 3, name: "Royal Purple", category: "Juices", image: juicePurple, desc: "Purple Cabbage, Apple, Lime" },
  { id: 4, name: "Berry Blast", category: "Juices", image: juicePink, desc: "Strawberry, Watermelon, Basil" },
  { id: 5, name: "Golden Glow", category: "Juices", image: juiceYellow, desc: "Pineapple, Yellow Bell Pepper, Lemon" },
  { id: 6, name: "Green Energy Bowl", category: "Bowls", image: bowlKiwi, desc: "Spinach Base, Kiwi, Banana, Granola" },
  { id: 7, name: "Tropical Paradise", category: "Bowls", image: bowlMixed, desc: "Mango Base, Mixed Berries, Coconut" },
  { id: 8, name: "Acai Antioxidant", category: "Bowls", image: bowlAcai, desc: "Acai Base, Banana, Chia Seeds" },
];

export default function Menu() {
  // We can also fetch from API, but for this specific request we rely on the beautiful static images
  // const { data: apiMenu } = useMenu();

  const categories = ["Juices", "Bowls"];

  return (
    <Layout>
      <Section background="default">
        <SectionHeader 
          title="Our Daily Menu" 
          subtitle="A rotating selection of nature's finest. Freshly prepared, never stored."
          centered
        />

        {categories.map((category) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-display font-semibold mb-8 text-primary border-b border-primary/10 pb-2 inline-block">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {STATIC_MENU.filter(item => item.category === category).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </Layout>
  );
}
