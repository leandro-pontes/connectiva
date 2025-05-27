import React from 'react';
    import { motion } from 'framer-motion';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';

    const BenefitsSection = ({ id, benefits }) => {
      return (
        <Section id={id}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-16 text-center">Análise Sob Medida: Seus Benefícios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border border-primary/10"
                >
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{benefit.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <DecorativeCircle size="w-52 h-52" color="bg-primary" position="top-[10%] left-[5%]" opacity="opacity-5" />
        </Section>
      );
    };

    export default BenefitsSection;