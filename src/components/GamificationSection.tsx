
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Fish, Trophy, Calendar, Languages } from 'lucide-react';

const GamificationSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-[#1A1F2C] text-white" id="gamification">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-[#1D9BF0] to-[#7DD3F9] p-[3px] rounded-2xl">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
                <div className="aspect-square md:aspect-[4/3] p-8 flex items-center justify-center">
                  {/* Akvaryum Tasarımı */}
                  <div className="relative w-full h-full bg-[#7DD3F9] rounded-xl overflow-hidden border border-blue-500/30">
                    {/* Su dalgaları efekti */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-blue-400/20 rounded-t-xl"></div>
                    
                    {/* Akvaryum tabanı */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-700/50 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 h-6 bg-amber-800/50 rounded-b-xl"></div>
                    </div>
                    
                    {/* Balık 1 */}
                    <div className="absolute top-1/4 right-1/4 w-12 h-8 bg-[#FF8A3C] rounded-full transform -rotate-12 animate-[bounce_3s_ease-in-out_infinite]">
                      <div className="w-0 h-0 border-t-8 border-l-0 border-b-8 border-r-8 border-transparent border-r-[#FF8A3C] absolute -right-7"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2 opacity-70"></div>
                    </div>
                    
                    {/* Balık 2 */}
                    <div className="absolute bottom-1/3 left-1/4 w-14 h-9 bg-[#FF8A3C] rounded-full transform rotate-12 animate-[bounce_4s_ease-in-out_infinite_0.5s]">
                      <div className="w-0 h-0 border-t-8 border-r-0 border-b-8 border-l-8 border-transparent border-l-[#FF8A3C] absolute -left-7"></div>
                      <div className="w-2 h-2 bg-white rounded-full absolute top-3 right-3 opacity-70"></div>
                    </div>
                    
                    {/* Balık 3 */}
                    <div className="absolute top-2/3 right-1/3 w-10 h-6 bg-[#FF8A3C] rounded-full transform -rotate-5 animate-[bounce_5s_ease-in-out_infinite_1s]">
                      <div className="w-0 h-0 border-t-6 border-l-0 border-b-6 border-r-6 border-transparent border-r-[#FF8A3C] absolute -right-5"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-2 left-2 opacity-70"></div>
                    </div>
                    
                    {/* Kabarcıklar */}
                    <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-[rise_10s_ease-in-out_infinite]"></div>
                    <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-[rise_7s_ease-in-out_infinite_1s]"></div>
                    <div className="absolute bottom-12 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-[rise_8s_ease-in-out_infinite_2s]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <style>
              {`
              @keyframes rise {
                0% { transform: translateY(0); opacity: 0.7; }
                100% { transform: translateY(-300px); opacity: 0; }
              }
              `}
            </style>
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
              {[
                { icon: <Fish className="h-5 w-5" />, title: "1000+", subtitle: "Öğrenilebilir Kelime", color: "from-[#1D9BF0]" },
                { icon: <Trophy className="h-5 w-5" />, title: "15+", subtitle: "Balık Çeşidi", color: "from-[#FF8A3C]" },
                { icon: <Calendar className="h-5 w-5" />, title: "30+", subtitle: "Günlük Aktivite", color: "from-[#1D9BF0]" },
                { icon: <Languages className="h-5 w-5" />, title: "5", subtitle: "Farklı Dil", color: "from-[#FF8A3C]" }
              ].map((stat, i) => (
                <Card key={i} className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${stat.color} to-transparent p-2 rounded-lg text-white`}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.title}</div>
                        <div className="text-gray-400 text-sm">{stat.subtitle}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Günlük Hedef</span>
                <span className="text-sm font-medium text-[#7DD3F9]">75%</span>
              </div>
              <Progress value={75} className="h-2 bg-gray-700" />
            </div>
            
            <Button size="lg" className="bg-[#1D9BF0] hover:bg-[#1a8ad8] w-full sm:w-auto">
              Akvaryumunu Başlat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
