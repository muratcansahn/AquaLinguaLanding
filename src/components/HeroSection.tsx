
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Star, BookOpen, ArrowRight, Users, Sparkles, X, Check } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Trans } from 'react-i18next';


const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [modalMessage, setModalMessage] = useState('');
  
  // Dile göre telefon görselini belirleme
  const getPhoneImage = () => {
    const currentLang = i18n.language;
    switch(currentLang) {
      case 'tr': return "/tr.png";
      case 'de': return "/al.png";
      case 'es': return "/es.png";
      default: return "/example.jpg"; // İngilizce için örnek görsel
    }
  };
  
  // İngilizce dil seçildiğinde gösterilecek içerik
  const renderEnglishContent = () => {
    return (
      <div className="relative flex justify-center items-center py-8">
        <div className="relative flex items-end justify-center" style={{ height: '600px', width: '600px' }}>
          {/* Almanca görsel - sola eğimli */}
          <div className="absolute bottom-20" style={{ transform: 'rotate(-15deg)', transformOrigin: 'bottom center', left: '70px' }}>
            <img 
              src="/al.png" 
              alt="Almanca uygulama" 
              className="h-[500px] w-auto object-contain"
            />
          </div>
          
          {/* Türkçe görsel - ortada */}
          <div className="absolute bottom-20" style={{ zIndex: 20 }}>
            <img 
              src="/tr.png" 
              alt="Türkçe uygulama" 
              className="h-[520px] w-auto object-contain"
            />
          </div>
          
          {/* İspanyolca görsel - sağa eğimli */}
          <div className="absolute bottom-20" style={{ transform: 'rotate(15deg)', transformOrigin: 'bottom center', right: '70px' }}>
            <img 
              src="/es.png" 
              alt="İspanyolca uygulama" 
              className="h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="pt-10 pb-12 md:pt-12 md:pb-16 px-6 md:px-10 overflow-hidden relative" id="hero">
      {/* Arka plan dekoratif elementleri */}
      <div className="absolute -z-10 top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-[#1D9BF0]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#FF8A3C]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <Badge variant="outline" className="px-4 py-1.5 gap-1.5 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 hover:bg-orange-100 border-orange-200 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-orange-500" /> 
            <span className="font-medium">{t('hero.badge')}</span>
          </Badge>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            <Trans i18nKey="hero.title">
              Kelime Öğrenmeyi <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8A3C] to-[#FF6B1A]">AquaLingua</span> ile Dönüştürün
            </Trans>
          </h1>
          
          <p className="text-sm text-gray-600 md:text-base max-w-md">
            {t('hero.description')}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3 mt-8"
          >
            <span className="text-sm md:text-base text-gray-700 font-medium pb-1">{t('hero.emailPrompt')}</span>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
                e.preventDefault();
                if (!email || isSubmitting) return;
                
                setIsSubmitting(true);
                
                try {
                  // Google Apps Script'e doğrudan istek gönderme
                  fetch("https://script.google.com/macros/s/AKfycbzG8UMsj4KvfussalEdABXA13ImMUaK5QUAtYw_1OJSrjp7GLbD8aocfunt9SETHvKs/exec", {
                    method: "POST",
                    mode: "no-cors", // Bu önemli!
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams({ email }),
                  });
                  
                  // Başarılı modal gösterme
                  setModalType('success');
                  setModalMessage(t('common.messages.emailSuccess'));
                  setShowModal(true);
                  setEmail('');
                } catch (error) {
                  console.error('Bekleme listesine eklenirken bir hata oluştu:', error);
                  setModalType('error');
                  setModalMessage(t('common.messages.emailError'));
                  setShowModal(true);
                } finally {
                  setIsSubmitting(false);
                }
              }}>
              <div className="relative w-full sm:max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('hero.emailPlaceholder')}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1D9BF0] w-full shadow-sm"
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" size="lg" className="bg-gradient-to-r from-[#1D9BF0] to-[#0D8BD0] hover:from-[#1a8ad8] hover:to-[#0c7dbd] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto" disabled={isSubmitting}>
                {t('hero.joinButton')}
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-2">{t('hero.privacyNote')}</p>
            
            <div className="mt-6">
              <p className="text-base text-gray-700 font-medium mb-3">{t('common.comingSoon')}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="transform hover:scale-105 transition-transform duration-300">
                  <img src="/app-store-badge.png" alt="App Store'dan İndir" className="h-10" />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform duration-300">
                  <img src="/google-play-badge.png" alt="Google Play'den İndir" className="h-10" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-gradient-to-br from-[#7DD3F9] to-[#1D9BF0] rounded-full"></div>
          <div className="flex items-center justify-center">
            {/* Dekoratif elementler */}
            <div className="absolute -z-10 top-0 right-0 w-20 h-20 bg-[#FF8A3C]/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-[#1D9BF0]/10 rounded-full blur-xl"></div>
            
            {/* Uygulama görselleri */}
            <div className="relative">
              {i18n.language === 'en' ? (
                renderEnglishContent()
              ) : (
                <img
                  src={getPhoneImage()}
                  alt="Uygulama görseli"
                  className="relative z-10 max-w-[300px] w-full object-contain mx-auto mb-20"
                  style={{
                    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))',
                    borderRadius: '0px',
                    height: 'auto'
                  }}
                />
              )}
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-8 -left-4 bg-white p-2 rounded-lg shadow-lg z-20 flex items-center gap-1.5"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-medium">{t('hero.stats.wordsLearned')}</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-16 -right-4 bg-white p-2 rounded-lg shadow-lg z-20 flex items-center gap-1.5"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                  <ArrowRight className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs font-medium">{t('hero.stats.streak')}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Animasyonlu Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-xl p-6 shadow-2xl max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${modalType === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {modalType === 'success' ? (
                      <Check className="w-8 h-8 text-green-600" />
                    ) : (
                      <X className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {modalType === 'success' ? t('common.success') || 'Başarılı' : t('common.error') || 'Hata'}
                  </h3>
                  
                  <p className="text-gray-600">{modalMessage}</p>
                  
                  <Button 
                    className={`mt-6 w-full ${modalType === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                    onClick={() => setShowModal(false)}
                  >
                    {t('common.close') || 'Kapat'}
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
