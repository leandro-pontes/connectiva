import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';

    const HeroSection = ({ id, heroImageUrl }) => {
      const whatsappLink = "http://api.whatsapp.com/send?phone=5521994919336";

      return (
        <Section id={id} className="min-h-[calc(100vh-80px)] flex items-center">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Sua maior riqueza são pessoas
              </h1>
              <p className="text-xl md:text-2xl text-[#64666C] mb-8">
                Promovendo saúde mental, implementando estratégias de prevenção e sensibilização, oferecendo tratamentos e oportunizando desenvolvimentos.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Saiba Mais
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img  src={heroImageUrl} alt="Equipe Connectiva em reunião inspiradora" className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[500px]" />
              <DecorativeCircle size="w-24 h-24" color="bg-accent-light" position="bottom-[-2rem] left-[-2rem]" opacity="opacity-50" />
              <DecorativeCircle size="w-16 h-16" color="bg-primary" position="top-[-1rem] right-[-1rem]" opacity="opacity-30" />
            </motion.div>
          </div>
        </Section>
      );
    };

    export default HeroSection;