
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10" id="hero">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full font-medium text-sm">
            <Star className="h-4 w-4 fill-purple-500" /> 
            Eğlenceli dil öğrenme
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Kelime Öğrenmeyi <span className="text-[#8B5CF6]">Akvaryum</span> Oyununa Dönüştürün
          </h1>
          
          <p className="text-lg text-gray-600 md:text-xl max-w-lg">
            Uygulamamız ile kelime öğrenme deneyiminizi gamifiye ederek eğlenceli ve
            bağımlılık yaratan bir öğrenme deneyimi sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7c4dfa] text-lg">
              Hemen Başla
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Nasıl Çalışır?
            </Button>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-500 pt-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-white"></div>
            </div>
            <span>1000+ mutlu kullanıcı</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="hero-gradient absolute -z-10 w-3/4 h-3/4 blur-3xl opacity-20 rounded-full"></div>
          <div className="bg-white rounded-3xl shadow-xl p-4 border border-gray-100">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-purple-50 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-16 w-16 text-[#1EAEDB]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Flashcard Öğrenme</h3>
                <p className="mt-2 text-gray-600">Modern ve etkili kelime öğrenme yöntemi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
