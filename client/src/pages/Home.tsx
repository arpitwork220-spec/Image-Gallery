import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArrowRight, Leaf, Activity, Heart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

// Static asset imports
import heroImg from "@assets/WhatsApp_Image_2025-12-25_at_2.27.27_PM_1766769518502.jpeg";
import juiceGroup from "@assets/WhatsApp_Image_2025-12-25_at_2.27.28_PM_(1)_1766769518504.jpeg";

const WHATSAPP_URL = "https://wa.me/919660254489?text=Hi%20Zestara%2C%20I%20want%20to%20start%20my%2030-day%20personalised%20nutrition%20plan.";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-primary font-medium text-sm mb-6">
              Holistic Clinical Nutrition
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-8">
              Restore your balance, <span className="text-primary italic">naturally.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Daily personalised nutrition plans designed to heal your gut, 
              boost your energy, and restore your natural glow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start my 30-Day Plan
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                How it works
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                No Added Sugar
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Freshly Pressed
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Doctor Approved
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src={heroImg} 
                alt="Zestara Green Juice Bottle" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 md:left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">100% Organic</h4>
                  <p className="text-xs text-muted-foreground">Sourced daily from local farms</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why it Matters */}
      <Section background="white">
        <SectionHeader 
          title="Why daily nutrition matters" 
          subtitle="Modern diets often lack the essential micronutrients our bodies crave. We bridge that gap with clinical precision."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: <Activity className="w-8 h-8 text-primary" />,
              title: "Gut Health",
              desc: "A healthy microbiome is the foundation of immunity. Our fiber-rich blends support digestion and reduce bloating."
            },
            {
              icon: <Heart className="w-8 h-8 text-primary" />,
              title: "Weight Management",
              desc: "Balanced nutrition helps regulate hormones and metabolism, making natural weight management sustainable."
            },
            {
              icon: <Leaf className="w-8 h-8 text-primary" />,
              title: "Skin & Hair Glow",
              desc: "Vitamins and antioxidants fight inflammation from within, resulting in clearer skin and stronger hair."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-background hover:bg-secondary/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Feature Split */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-[2rem] overflow-hidden">
               <img 
                src={juiceGroup} 
                alt="Fresh Juices Collection" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Formulated for <span className="text-primary">Consistency.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Wellness isn't a one-time fix. It's a daily habit. Our 30-day plans make it effortless to give your body what it needs, every single morning.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Personalised to your health goals",
                "Delivered fresh every morning by 8 AM",
                "Pause or skip days with flexible scheduling",
                "No preservatives, no added sugar, raw & cold-pressed"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Consult & Start Plan</Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section background="primary" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6 text-white">
            Ready to feel your best?
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Join hundreds of others transforming their health with Zestara's daily nutrition plans.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-none border-none">
              Start via WhatsApp
            </Button>
          </a>
        </div>
      </Section>
    </Layout>
  );
}
