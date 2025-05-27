import React from 'react';
    import { motion } from 'framer-motion';
    import Section from '@/components/layout/Section';
    import DecorativeCircle from '@/components/ui/DecorativeCircle';

    const MissionSection = ({ id }) => {
      return (
        <Section id={id} className="bg-gradient-to-r from-primary to-[#4A5D8B] text-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Nossa Missão</h2>
              <p className="text-lg mb-6">
                A Connectiva Psicologia surge para atender um dos grandes desafios da atualidade: a saúde mental, emocional e social.
              </p>
              <p className="text-lg mb-6">
                Oferecemos soluções que atendam as atualizações da NR-1, onde empresas estão legalmente implicadas na preservação da saúde mental de seus colaboradores, identificando e combatendo os chamados “riscos psicossociais”, onde a responsabilidade pela saúde mental entra com o mesmo peso do EPI (Equipamento de Proteção Individual).
              </p>
              <p className="text-lg">
                Nossa missão está baseada em abordagens clínicas e científicas, oferecemos suporte a indivíduos e organizações, promovendo bem-estar e crescimento pessoal.
              </p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img  alt="Pessoas colaborando em um ambiente de trabalho saudável" className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[400px]" src="https://images.unsplash.com/photo-1666214277657-e60f05c40b04" />
              <DecorativeCircle size="w-32 h-32" color="bg-accent-light" position="top-[-3rem] left-[-3rem]" opacity="opacity-40" />
            </motion.div>
          </div>
        </Section>
      );
    };
    export default MissionSection;