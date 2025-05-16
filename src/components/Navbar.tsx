
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-10 flex items-center justify-between shadow-sm fixed top-0 w-full z-10">
      <div className="flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-[#8B5CF6]" />
        <span className="font-bold text-xl">WordsApp</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Özellikler</a>
        <a href="#activities" className="text-gray-600 hover:text-gray-900 transition-colors">Aktiviteler</a>
        <a href="#gamification" className="text-gray-600 hover:text-gray-900 transition-colors">Gamification</a>
        <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Kullanıcılar</a>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost">Giriş</Button>
        <Button className="bg-[#8B5CF6] hover:bg-[#7c4dfa]">Kayıt Ol</Button>
      </div>
    </nav>
  );
};

export default Navbar;
