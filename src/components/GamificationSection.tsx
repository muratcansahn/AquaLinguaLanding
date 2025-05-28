
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Fish, Trophy, Calendar, Languages, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Trans } from 'react-i18next';

const GamificationSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 text-white relative overflow-hidden text-center" id="gamification" style={{ background: 'linear-gradient(180deg, #1E88E5 0%, #0D47A1 100%)' }}>
      {/* Dekoratif okyanus arka plan elementleri */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bubble-pattern.svg')] opacity-10 z-0"></div>
      
      {/* Dalga efektleri */}
      <div className="absolute -z-0 top-0 left-0 w-full h-24 bg-[url('/wave-top.svg')] bg-repeat-x opacity-20"></div>
      <div className="absolute -z-0 bottom-0 left-0 w-full h-24 bg-[url('/wave-bottom.svg')] bg-repeat-x opacity-20"></div>
      
      {/* Işık efektleri */}
      <div className="absolute -z-0 top-10 right-10 w-1/3 h-1/3 bg-gradient-to-b from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -z-0 bottom-10 left-10 w-1/2 h-1/2 bg-gradient-to-t from-blue-800/30 to-transparent rounded-full blur-3xl"></div>
      
      {/* Yüzen baloncuklar */}
      <div className="absolute -z-0 animate-float-slow top-1/4 left-1/4 w-6 h-6 rounded-full bg-white/10"></div>
      <div className="absolute -z-0 animate-float-medium top-1/3 right-1/4 w-4 h-4 rounded-full bg-white/10"></div>
      <div className="absolute -z-0 animate-float-fast bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="space-y-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <Trans i18nKey="gamification.mainTitle">
              Akvaryumunuzu <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-100">Büyütün</span>,
              <br />Kelimeleri Öğrenin
            </Trans>
          </h2>
          <p className="text-lg text-blue-50/90 leading-relaxed max-w-2xl">
            {t('gamification.mainDescription')}
          </p>
            
          {/* Yatay düzen için grid */}
          <div className="grid md:grid-cols-2 gap-8 w-full items-center my-8">
            {/* Balık görseli - Sol taraf */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative order-2 md:order-1"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-3xl blur-xl"></div>
              <img 
                src="/game-screen-fish.png" 
                alt="Akvaryum balığı" 
                className="max-w-full w-64 md:w-80 mx-auto rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            {/* İstatistik kutuları - Sağ taraf */}
            <div className="grid grid-cols-2 gap-4 w-full order-1 md:order-2">
              {[
                { icon: <Fish className="h-6 w-6" />, color: "from-blue-600 to-blue-400" },
                { icon: <Trophy className="h-6 w-6" />, color: "from-amber-500 to-amber-300" },
                { icon: <Calendar className="h-6 w-6" />, color: "from-blue-600 to-blue-400" },
                { icon: <Languages className="h-6 w-6" />, color: "from-amber-500 to-amber-300" }
              ].map((statIcon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <Card className="bg-white border-white/40 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-start gap-4">
                      <div className={`bg-gradient-to-r ${statIcon.color} p-3 rounded-lg text-white shadow-md flex items-center justify-center min-w-12`}>
                        {statIcon.icon}
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="text-xl font-bold text-blue-600">{t(`gamification.stats.${i}.title`)}</div>
                        <div className="text-blue-500 text-sm font-medium">{t(`gamification.stats.${i}.subtitle`)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </div>
          </div>
            
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <p className="text-white text-lg mb-4">Coming Soon</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="transform hover:scale-105 transition-transform duration-300">
                  <img src="/app-store-badge.png" alt="App Store'dan İndir" className="h-12" />
                </a>
                <a href="#" className="transform hover:scale-105 transition-transform duration-300">
                  <img src="/google-play-badge.png" alt="Google Play'den İndir" className="h-12" />
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
