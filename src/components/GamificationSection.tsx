
import React from 'react';
import { Button } from "@/components/ui/button";

const GamificationSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-900 text-white" id="gamification">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-[#1EAEDB] to-[#8B5CF6] p-1 rounded-2xl">
              <div className="bg-gray-800 rounded-2xl overflow-hidden relative">
                <div className="aspect-square md:aspect-[4/3] bg-blue-900/20 p-8 flex items-center justify-center">
                  <div className="rounded-full w-48 h-48 bg-blue-500/20 flex items-center justify-center animate-pulse">
                    <div className="rounded-full w-32 h-32 bg-blue-500/40 flex items-center justify-center">
                      <div className="rounded-full w-20 h-20 bg-blue-500/60"></div>
                    </div>
                  </div>
                  
                  {/* Fish elements */}
                  <div className="absolute top-1/4 right-1/5 w-10 h-6 bg-orange-400 rounded-full transform -rotate-12 animate-[bounce_3s_ease-in-out_infinite]">
                    <div className="w-0 h-0 border-t-8 border-l-0 border-b-8 border-r-8 border-transparent border-r-orange-400 absolute -right-7"></div>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/4 w-12 h-7 bg-purple-400 rounded-full transform rotate-12 animate-[bounce_2.5s_ease-in-out_infinite]">
                    <div className="w-0 h-0 border-t-8 border-r-0 border-b-8 border-l-8 border-transparent border-l-purple-400 absolute -left-7"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Akvaryumunuzu Büyütün, Kelimeleri Öğrenin
            </h2>
            <p className="text-lg text-gray-300">
              WordsApp'in eşsiz akvaryum özelliği ile kelime öğrenmeyi eğlenceli bir oyuna dönüştürün. 
              Öğrendikçe puan kazanın, balıklarınızı besleyin ve koleksiyonunuzu genişletin.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#1EAEDB]">1000+</div>
                <div className="text-gray-400">Öğrenilebilir Kelime</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#8B5CF6]">15+</div>
                <div className="text-gray-400">Balık Çeşidi</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#1EAEDB]">30+</div>
                <div className="text-gray-400">Günlük Aktivite</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#8B5CF6]">5</div>
                <div className="text-gray-400">Farklı Dil</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7c4dfa] text-lg">
              Akvaryumunu Başlat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
