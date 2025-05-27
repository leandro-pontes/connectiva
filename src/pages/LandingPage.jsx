import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import { Phone, Mail, MapPin, Brain, Users, Zap, BarChart2, ShieldCheck, Smile } from 'lucide-react';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';
    import HeroSection from '@/components/sections/HeroSection';
    import ServicesSection from '@/components/sections/ServicesSection';
    import MissionSection from '@/components/sections/MissionSection';
    import BenefitsSection from '@/components/sections/BenefitsSection';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import ContactSection from '@/components/sections/ContactSection';

    const LandingPage = () => {
      const brandName = "Connectiva";
      const heroImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/6604e0fd-96d0-4261-ba38-85f15c4d365f/e365c9bfdd3188b10ee50bb0117c3b67.png";
      const locationImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/6604e0fd-96d0-4261-ba38-85f15c4d365f/5f8102a4750b0d57fc67868440cdbbd1.jpg";

      const services = [
        { title: "Avaliação, consultorias e suporte organizacional (NR-1)", icon: <BarChart2 className="w-8 h-8 text-primary" /> },
        { title: "Palestras, workshops e treinamentos", icon: <Users className="w-8 h-8 text-primary" /> },
        { title: "Programas de prevenção e bem-estar", icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
        { title: "Psicoterapia individual e em Grupo", icon: <Brain className="w-8 h-8 text-primary" /> },
      ];

      const benefits = [
        { title: "Atendimento humanizado", icon: <Smile className="w-6 h-6 text-accent" /> },
        { title: "Redução de absenteísmo", icon: <Zap className="w-6 h-6 text-accent" /> },
        { title: "Ganhos de Produtividade", icon: <BarChart2 className="w-6 h-6 text-accent" /> },
        { title: "Prevenção e Tratamentos", icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
        { title: "Adaptação as exigências legais", icon: <Users className="w-6 h-6 text-accent" /> },
        { title: "Satisfação e Realização no ambiente de trabalho", icon: <Brain className="w-6 h-6 text-accent" /> },
      ];

      const testimonials = [
        { name: "Ana Silva", role: "Gerente de RH, Empresa X", quote: "A Connectiva transformou a cultura da nossa empresa. O bem-estar dos colaboradores melhorou significativamente.", avatar: "AS" },
        { name: "Carlos Pereira", role: "CEO, Startup Y", quote: "Os programas de prevenção são fantásticos. Vimos uma redução notável no absenteísmo.", avatar: "CP" },
        { name: "Mariana Costa", role: "Colaboradora, Consultoria Z", quote: "As sessões de psicoterapia em grupo foram essenciais para mim. Recomendo fortemente!", avatar: "MC" },
      ];

      const navLinks = [
        { href: "#principal", label: "Principal" },
        { href: "#serviços", label: "Serviços" },
        { href: "#missão", label: "Missão" },
        { href: "#benefícios", label: "Benefícios" },
        { href: "#depoimentos", label: "Depoimentos" },
        { href: "#contato", label: "Contato" },
      ];


      return (
        <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 text-[#64666C]">
          <DecorativeCircle size="w-64 h-64" color="bg-primary" position="top-[-5rem] left-[-5rem]" opacity="opacity-10" />
          <DecorativeCircle size="w-48 h-48" color="bg-accent" position="top-[10rem] right-[-3rem]" opacity="opacity-20" />
          <DecorativeCircle size="w-32 h-32" color="bg-accent-light" position="bottom-[20rem] left-[5rem]" opacity="opacity-15" />
          <DecorativeCircle size="w-72 h-72" color="bg-primary" position="bottom-[-8rem] right-[-6rem]" opacity="opacity-5" />

          <Header brandName={brandName} navLinks={navLinks} />

          <HeroSection id="principal" heroImageUrl={heroImageUrl} />
          
          <Section className="bg-primary/5">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-12">
                Sua saúde e de seus colaboradores é o seu maior patrimônio
              </h2>
            </div>
          </Section>

          <ServicesSection id="serviços" services={services} />
          <MissionSection id="missão" />
          <BenefitsSection id="benefícios" benefits={benefits} />
          <TestimonialsSection id="depoimentos" testimonials={testimonials} />
          <ContactSection id="contato" locationImageUrl={locationImageUrl} />
          
          <Footer brandName={brandName} />
        </div>
      );
    };

    export default LandingPage;