
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, BookOpen, ArrowRight, Users } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10" id="hero">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="px-4 py-1.5 gap-1.5 bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">
            <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" /> 
            Eğlenceli dil öğrenme
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Kelime Öğrenmeyi <span className="text-[#FF8A3C]">Akvaryum</span> Oyununa Dönüştürün
          </h1>
          
          <p className="text-lg text-gray-600 md:text-xl max-w-lg">
            Uygulamamız ile kelime öğrenme deneyiminizi gamifiye ederek eğlenceli ve
            bağımlılık yaratan bir öğrenme deneyimi sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#1D9BF0] hover:bg-[#1a8ad8] text-white w-full sm:w-auto gap-2">
              Hemen Başla <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Nasıl Çalışır?
            </Button>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-500 pt-2">
            <div className="flex -space-x-2">
              {[
                'bg-blue-500',
                'bg-green-500',
                'bg-[#FF8A3C]',
                'bg-[#1D9BF0]'
              ].map((color, i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-medium`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-gray-400" />
              <span>1000+ mutlu kullanıcı</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-gradient-to-br from-[#7DD3F9] to-[#1D9BF0] rounded-full"></div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#7DD3F9] to-[#7DD3F9] aspect-[4/5]">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center relative">
                {/* Fish */}
                <div className="w-16 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-8 bg-[#FF8A3C] rounded-full transform -rotate-0 relative">
                    <div className="w-0 h-0 border-t-8 border-l-0 border-b-8 border-r-8 border-transparent border-r-[#FF8A3C] absolute -right-7"></div>
                    <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2 opacity-70"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-8 w-32 h-1 bg-green-500 rounded"></div>
                
                <div className="absolute bottom-24 text-white text-center w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">Akvaryumunuz</h3>
                  <p className="text-white/90">Kelimeler öğrendikçe balıklarınız büyüsün</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
