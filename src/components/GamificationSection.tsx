
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Fish, Trophy, Calendar, Languages } from 'lucide-react';
import { motion, useReducedMotion } from "framer-motion";
import { Trans } from 'react-i18next';

const GamificationSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-10 text-white relative overflow-hidden text-center" id="gamification" style={{ background: 'linear-gradient(180deg, #1E88E5 0%, #0D47A1 100%)' }}>
      {/* Dekoratif okyanus arka plan elementleri - daha düşük kalitede arka plan */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bubble-pattern.svg')] opacity-5 z-0"></div>
      
      {/* Dalga efektleri - daha hafif */}
      <div className="absolute -z-0 top-0 left-0 w-full h-16 md:h-24 bg-[url('/wave-top.svg')] bg-repeat-x opacity-10"></div>
      <div className="absolute -z-0 bottom-0 left-0 w-full h-16 md:h-24 bg-[url('/wave-bottom.svg')] bg-repeat-x opacity-10"></div>
      
      {/* Işık efektleri - daha hafif blur */}
      <div className="absolute -z-0 top-10 right-10 w-1/3 h-1/3 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute -z-0 bottom-10 left-10 w-1/2 h-1/2 bg-gradient-to-t from-blue-800/30 to-transparent rounded-full blur-2xl"></div>
      
      {/* Yüzen baloncuklar - daha az animasyon */}
      <div className="absolute -z-0 top-1/4 left-1/4 w-6 h-6 rounded-full bg-white/10"></div>
      <div className="absolute -z-0 top-1/3 right-1/4 w-4 h-4 rounded-full bg-white/10"></div>
      <div className="absolute -z-0 bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="space-y-6 md:space-y-8 flex flex-col items-center"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            <Trans i18nKey="gamification.mainTitle">
              Akvaryumunuzu <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-100">Büyütün</span>,
              <br className="hidden sm:block" />Kelimeleri Öğrenin
            </Trans>
          </h2>
          <p className="text-base md:text-lg text-blue-50/90 leading-relaxed max-w-2xl">
            {t('gamification.mainDescription')}
          </p>
            
          {/* Yatay düzen için grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full items-center my-6 md:my-8">
            {/* Balık görseli - Sol taraf */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-3xl blur-lg"></div>
              <img 
                src="/game-screen-fish.webp" 
                alt="Akvaryum balığı" 
                loading="lazy"
                width="320"
                height="640"
                className="max-w-full w-56 sm:w-64 md:w-80 mx-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            
            {/* İstatistik kutuları - Sağ taraf */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full order-1 md:order-2">
              {[
                { icon: <Fish className="h-5 w-5 md:h-6 md:w-6" />, color: "from-blue-600 to-blue-400" },
                { icon: <Trophy className="h-5 w-5 md:h-6 md:w-6" />, color: "from-amber-500 to-amber-300" },
                { icon: <Calendar className="h-5 w-5 md:h-6 md:w-6" />, color: "from-blue-600 to-blue-400" },
                { icon: <Languages className="h-5 w-5 md:h-6 md:w-6" />, color: "from-amber-500 to-amber-300" }
              ].map((statIcon, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: i * 0.05 }}
                className="w-full"
              >
                <Card className="bg-white border-white/40 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
                  <CardContent className="p-2 sm:p-3 md:p-4">
                    <div className="flex items-center justify-start gap-2 md:gap-4">
                      <div className={`bg-gradient-to-r ${statIcon.color} p-2 md:p-3 rounded-lg text-white shadow flex items-center justify-center min-w-8 md:min-w-12`}>
                        {statIcon.icon}
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="text-base md:text-xl font-bold text-blue-600">{t(`gamification.stats.${i}.title`)}</div>
                        <div className="text-blue-500 text-xs md:text-sm font-medium">{t(`gamification.stats.${i}.subtitle`)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
            
          <motion.div
            className="mt-6 md:mt-8"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: 0.2 }}
          >
            <div className="flex flex-col items-center">
              <p className="text-white text-base md:text-lg mb-3 md:mb-4">Coming Soon</p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                  <img src="/app-store-badge.webp" alt="App Store'dan İndir" width="120" height="40" loading="lazy" className="h-10 md:h-12" />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform duration-200">
                  <img src="/google-play-badge.webp" alt="Google Play'den İndir" width="135" height="40" loading="lazy" className="h-10 md:h-12" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GamificationSection;
