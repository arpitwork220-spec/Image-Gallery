import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import bowlImg from "@assets/WhatsApp_Image_2025-12-25_at_2.27.29_PM_1766769518507.jpeg";

const WHATSAPP_URL = "https://wa.me/919660254489?text=Hi%20Zestara%2C%20I%20want%20to%20start%20my%2030-day%20personalised%20nutrition%20plan.";

export default function Personalisation() {
  return (
    <Layout>
      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Not just juice. <br/>
              <span className="text-primary">Clinical nutrition.</span>
             </h1>
             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
               One size does not fit all. Your body is unique, and your nutrition should be too. 
               Unlike generic juice bars, we build your plan based on your specific biomarkers and goals.
             </p>

             <div className="space-y-6 mb-10">
               {[
                 { title: "Detox & Cleanse", desc: "Focus on liver support and digestive rest with alkalizing greens and hydration." },
                 { title: "High Protein / Recovery", desc: "Plant-based proteins and amino acids to support muscle repair and satiety." },
                 { title: "Glow / Skin Health", desc: "Antioxidant-rich berries and healthy fats for hydration and collagen support." }
               ].map((goal, i) => (
                 <div key={i} className="pl-6 border-l-2 border-primary/20">
                   <h4 className="font-semibold text-foreground">{goal.title}</h4>
                   <p className="text-sm text-muted-foreground">{goal.desc}</p>
                 </div>
               ))}
             </div>

             <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button>Consult with our Nutritionist</Button>
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
             <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={bowlImg} 
                  alt="Personalised Bowl" 
                  className="w-full h-full object-cover"
                />
             </div>
             
             <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-[200px]">
               <p className="font-display italic text-primary text-lg mb-1">"Curated for you"</p>
               <p className="text-xs text-muted-foreground">Every ingredient is chosen with purpose for your specific body type.</p>
             </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
