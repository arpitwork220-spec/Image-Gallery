import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { MessageCircle, FileText, Truck } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/919660254489?text=Hi%20Zestara%2C%20I%20want%20to%20start%20my%2030-day%20personalised%20nutrition%20plan.";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "1. Share your goals",
      desc: "Connect with us on WhatsApp. Tell us about your lifestyle, dietary preferences, and what you want to achieve (weight loss, glowing skin, better digestion).",
      delay: 0
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "2. We design your plan",
      desc: "Our nutritionists curate a monthly schedule of juices, smoothies, and bowls specifically targeted to your needs. You get a varied menu that keeps it exciting.",
      delay: 0.2
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "3. Daily delivery",
      desc: "Wake up to fresh nutrition at your doorstep every morning. No shopping, no chopping, no cleanup. Just pure health, ready to consume.",
      delay: 0.4
    }
  ];

  return (
    <Layout>
      <Section background="default" className="pt-32">
        <SectionHeader 
          title="Simple, seamless wellness" 
          subtitle="We've removed the friction from healthy living. Three steps to a better you."
          centered
        />

        <div className="relative mt-20">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary/20 -z-10" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6 }}
                className="flex flex-col items-center text-center bg-white md:bg-transparent p-8 md:p-0 rounded-2xl shadow-sm md:shadow-none"
              >
                <div className="w-24 h-24 rounded-full bg-background border-4 border-white shadow-lg flex items-center justify-center mb-8 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-full bg-secondary/10 mb-8">
            <div className="px-6 py-2 rounded-full border border-secondary/20 text-sm font-medium text-primary-foreground/80 bg-primary/5">
              Flexibility included: Pause or skip days anytime
            </div>
          </div>
          <br />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Start Your Journey</Button>
          </a>
        </div>
      </Section>
    </Layout>
  );
}
