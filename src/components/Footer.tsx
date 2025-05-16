
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Kelime Haznenizi Genişletmeye Başlayın
              </h2>
              <p className="text-lg text-gray-600 max-w-lg">
                Hemen kaydolun ve eğlenceli kelime öğrenme deneyimine başlayın. 
                İlk 7 gün ücretsiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7c4dfa] text-lg">
                  Ücretsiz Başla
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Demo İzle
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Uygulama</h3>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-gray-600 hover:text-gray-900">Özellikler</a></li>
                  <li><a href="#activities" className="text-gray-600 hover:text-gray-900">Aktiviteler</a></li>
                  <li><a href="#gamification" className="text-gray-600 hover:text-gray-900">Gamification</a></li>
                  <li><a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Destek</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">SSS</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">İletişim</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Gizlilik Politikası</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Kullanım Şartları</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-[#8B5CF6]" />
            <span className="font-bold">WordsApp</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} WordsApp. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
