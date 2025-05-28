
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className="bg-white py-4 px-6 md:px-10 flex items-center justify-between shadow-sm fixed top-0 w-full z-50">
      <div className="flex items-center gap-2">
        <Logo className="h-8 w-8" />
        <span className="font-bold text-xl">Aqua<span className="text-orange-500">Lingua</span></span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">{t('navbar.home')}</a>
        <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">{t('navbar.features')}</a>
        <a href="#activities" className="text-gray-600 hover:text-gray-900 transition-colors">{t('activity.title')}</a>
        <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">{t('faq.title')}</a>
      </div>
      
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
      
      </div>
    </nav>
  );
};

export default Navbar;
