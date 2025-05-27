import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X } from 'lucide-react';

    const Header = ({ brandName, navLinks }) => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/6604e0fd-96d0-4261-ba38-85f15c4d365f/aa6563c11e3be20eda8546688971e090.png";

      const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

      const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        exit: { opacity: 0, y: -20 }
      };

      const mobileLinkVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
      };
      
      const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
      };


      return (
        <header className="py-4 px-4 md:px-8 sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <motion.a
              href="#principal"
              onClick={(e) => handleLinkClick(e, "#principal")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <img src={logoUrl} alt={`${brandName} Logo`} className="h-10 md:h-12 mr-2" />
            </motion.a>
            
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-primary transition-colors duration-300 text-[#64666C]"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="md:hidden">
              <Button onClick={toggleMobileMenu} variant="ghost" size="icon" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg py-4 z-40"
              >
                <nav className="flex flex-col items-center space-y-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-lg hover:text-primary transition-colors duration-300 text-[#64666C] py-2"
                      variants={mobileLinkVariants}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Header;