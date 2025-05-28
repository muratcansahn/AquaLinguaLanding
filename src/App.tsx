import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OceanTheme from "./components/OceanTheme";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const queryClient = new QueryClient();

// Dile göre title'ı güncelleyen bileşen
const TitleUpdater = () => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Mevcut dile göre title'ı güncelle
    const updateTitle = () => {
      const lang = i18n.language;
      
      switch(lang) {
        case 'tr':
          document.title = 'AquaLingua - Yabancı Dil Öğrenimini Kolaylaştıran Kelime Havuzu';
          break;
        case 'en':
          document.title = 'AquaLingua - Word Pool That Makes Language Learning Easier';
          break;
        case 'de':
          document.title = 'AquaLingua - Wortpool, der das Sprachenlernen erleichtert';
          break;
        case 'es':
          document.title = 'AquaLingua - Banco de palabras que facilita el aprendizaje de idiomas';
          break;
        default:
          document.title = 'AquaLingua - Yabancı Dil Öğrenimini Kolaylaştıran Kelime Havuzu';
      }
    };
    
    // İlk yükleme ve dil değişikliklerinde title'ı güncelle
    updateTitle();
    i18n.on('languageChanged', updateTitle);
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', updateTitle);
    };
  }, [i18n]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <TitleUpdater />
      <OceanTheme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </OceanTheme>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
