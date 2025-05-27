import React from 'react';
    import { motion } from 'framer-motion';
    
    const Footer = ({ brandName }) => {
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/6604e0fd-96d0-4261-ba38-85f15c4d365f/aa6563c11e3be20eda8546688971e090.png";
      return (
        <footer className="py-12 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 flex items-center justify-center"
            >
              <img src={logoUrl} alt={`${brandName} Logo`} className="h-10" />
            </motion.div>
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} {brandName}. Todos os direitos reservados.
            </p>
            <p className="text-xs opacity-60 mt-2">
              Promovendo saúde mental e bem-estar.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;