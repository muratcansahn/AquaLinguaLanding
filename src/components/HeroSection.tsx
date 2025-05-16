
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, BookOpen, ArrowRight, Users } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-10" id="hero">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge variant="outline" className="px-4 py-1.5 gap-1.5 bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200">
            <Star className="h-3.5 w-3.5 fill-purple-500 text-purple-500" /> 
            Eğlenceli dil öğrenme
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Kelime Öğrenmeyi <span className="text-[#8B5CF6]">Akvaryum</span> Oyununa Dönüştürün
          </h1>
          
          <p className="text-lg text-gray-600 md:text-xl max-w-lg">
            Uygulamamız ile kelime öğrenme deneyiminizi gamifiye ederek eğlenceli ve
            bağımlılık yaratan bir öğrenme deneyimi sunuyoruz.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7c4dfa] text-white w-full sm:w-auto gap-2">
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
                'bg-yellow-500',
                'bg-red-500'
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
          <div className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-gradient-to-br from-[#8B5CF6] to-[#1EAEDB] rounded-full"></div>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 aspect-[4/5]">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <BookOpen className="h-16 w-16 text-[#8B5CF6]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Akıllı Flashcard Sistemi</h3>
                <p className="text-gray-600">Modern spaced repetition algoritması ile kalıcı öğrenme</p>
                
                <div className="w-full mt-8">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Öğrenme İlerlemen</div>
                      <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                        93%
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-[#8B5CF6] h-2 rounded-full w-[93%]"></div>
                    </div>
                  </div>
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
