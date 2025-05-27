import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import Section from '@/components/layout/Section';

    const TestimonialsSection = ({ id, testimonials }) => {
      return (
        <Section id={id} className="bg-primary/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-16 text-center">O que nossos clientes dizem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <p className="text-lg text-[#64666C] mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={`https://avatar.vercel.sh/${testimonial.name.replace(/\s+/g, '')}.png`} alt={testimonial.name} />
                          <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      );
    };

    export default TestimonialsSection;