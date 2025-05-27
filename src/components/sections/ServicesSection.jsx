import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle } from '@/components/ui/card';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';

    const ServicesSection = ({ id, services }) => {
      return (
        <Section id={id}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-16 text-center">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary/20 bg-white">
                    <CardHeader className="items-center text-center">
                      <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <DecorativeCircle size="w-40 h-40" color="bg-accent" position="bottom-[5rem] right-[10%]" opacity="opacity-10" />
        </Section>
      );
    };

    export default ServicesSection;