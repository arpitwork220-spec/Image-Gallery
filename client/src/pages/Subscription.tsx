import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { Check, Calendar, Coffee, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/919660254489?text=Hi%20Zestara%2C%20I%20want%20to%20start%20my%2030-day%20personalised%20nutrition%20plan.";

export default function Subscription() {
  return (
    <Layout>
      <Section background="default">
        <SectionHeader 
          title="The 30-Day Reset" 
          subtitle="Commit to 30 days of clean nutrition and watch your body transform. No hidden fees, cancel anytime."
          centered
        />

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/5 grid md:grid-cols-2"
          >
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold mb-4">Monthly Plan</h3>
              <p className="text-muted-foreground mb-8">
                Everything you need to build a sustainable healthy habit. Tailored to your goals.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Personalised daily menu",
                  "Free delivery every morning",
                  "Weekly nutritionist check-ins",
                  "Flexible pauses (travel/holidays)",
                  "Glass bottle recycling program"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full">Get Pricing via WhatsApp</Button>
              </a>
              <p className="text-center text-xs text-muted-foreground mt-4">
                Prices vary based on customisation needs.
              </p>
            </div>

            <div className="bg-primary/5 p-10 md:p-14 flex flex-col justify-center border-t md:border-t-0 md:border-l border-primary/5">
              <h4 className="font-semibold mb-6 flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                Why commit to 30 days?
              </h4>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Habit Formation</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      It takes time to reset your palate and metabolism. 30 days provides a solid foundation.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Coffee className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm mb-1">Convenience</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Decision fatigue leads to poor choices. We make the healthy choice the easy choice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
}
