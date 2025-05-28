
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { BookOpen, Twitter, Instagram, Facebook, Youtube, Mail, Globe, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #1E88E5 0%, #0D47A1 100%)' }}>
      {/* Dekoratif okyanus arka plan elementleri */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bubble-pattern.svg')] opacity-10 z-0"></div>
      
      {/* Dalga efektleri */}
      <div className="absolute -z-0 top-0 left-0 w-full h-24 bg-[url('/wave-top.svg')] bg-repeat-x opacity-20"></div>
      <div className="absolute -z-0 bottom-0 left-0 w-full h-24 bg-[url('/wave-bottom.svg')] bg-repeat-x opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* CTA Bölümü */}
 
        
        {/* Ana Footer Bölümü */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-blue-300/20">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.app.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.app.features')}</a></li>
              <li><a href="#activities" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.app.activities')}</a></li>
              <li><a href="#gamification" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.app.gamification')}</a></li>
              <li><a href="#testimonials" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.app.testimonials')}</a></li>
              <li><a href="#faq" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.app.faq')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.support.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.support.faq')}</a></li>
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.support.contact')}</a></li>
              {/* <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.support.helpCenter')}</a></li>
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.support.community')}</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.legal.title')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.legal.privacy')}</a></li>
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.legal.terms')}</a></li>
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.legal.cookies')}</a></li>
              <li><a href="#" className="text-white hover:text-blue-100 transition-colors flex items-center gap-1"><ChevronRight className="h-3 w-3" /> {t('footer.sections.legal.kvkk')}</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-semibold text-lg mb-4 text-white">{t('footer.sections.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="text-white flex items-center gap-2"><Mail className="h-4 w-4" /> info@aqualingua.com</li>
              <li className="text-white flex items-center gap-2"><Globe className="h-4 w-4" /> www.aqualingua.com</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">{t('footer.sections.contact.followUs')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-100 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-blue-100 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-blue-100 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-blue-100 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        
        {/* Alt Footer */}
        <div className="py-6 border-t border-blue-300/20 flex flex-col md:flex-row justify-between items-center gap-4 rounded-lg px-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-rp-1.5 rounded-lg">
              <img src="/logo.png" alt="AquaLingua" className="h-5 w-5 object-contain" />
            </div>
            <span className="font-bold text-white">AquaLingua</span>
          </div>
          
          <div className="text-white text-sm">
            &copy; {new Date().getFullYear()} AquaLingua. {t('footer.copyright')}
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
