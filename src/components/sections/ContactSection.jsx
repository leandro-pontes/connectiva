import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Phone, Mail, MapPin } from 'lucide-react';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';

    const ContactSection = ({ id, locationImageUrl }) => {
      return (
        <Section id={id} className="bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">Entre em Contato</h2>
            <p className="text-xl text-[#64666C] mb-12 max-w-2xl mx-auto">
              Para mais informações, entre em contato. Estamos prontos para ajudar sua empresa a prosperar.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                className="text-left space-y-6 p-8 bg-white rounded-lg shadow-xl border border-primary/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-4">Nossos Detalhes</h3>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-accent" />
                  <a href="tel:21999353259" className="text-lg hover:text-primary transition-colors">21 99935.3259</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <a href="mailto:connectiva07@gmail.com" className="text-lg hover:text-primary transition-colors">connectiva07@gmail.com</a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    Absolutto Business Towers<br />
                    Av. das Américas 19005, 2º andar<br />
                    Recreio dos Bandeirantes<br />
                    Rio de Janeiro / RJ
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                    Fale Conosco Agora
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="rounded-lg shadow-xl overflow-hidden h-[400px] md:h-full"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img  src={locationImageUrl} alt="Localização da Connectiva no Absolutto Business Towers" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
          <DecorativeCircle size="w-60 h-60" color="bg-accent-light" position="bottom-[-5rem] left-[20%]" opacity="opacity-20" />
        </Section>
      );
    };

    export default ContactSection;