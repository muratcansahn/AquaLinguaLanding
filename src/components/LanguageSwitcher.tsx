import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GB, TR, DE, ES } from 'country-flag-icons/react/3x2';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Dil-bayrak eşleşmeleri
  const getFlagComponent = (lang: string) => {
    const flagProps = { className: "w-12 h-8" };
    switch(lang) {
      case 'tr': return <TR {...flagProps} />;
      case 'en': return <GB {...flagProps} />;
      case 'de': return <DE {...flagProps} />;
      case 'es': return <ES {...flagProps} />;
      default: return <TR {...flagProps} />;
    }
  };

  // Desteklenen diller
  const languages = ['tr', 'en', 'de', 'es'];
  const currentLang = i18n.language;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full p-1 h-10 w-10 overflow-hidden">
          {getFlagComponent(currentLang)}
          <span className="sr-only">Dil değiştir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(lang => (
          <DropdownMenuItem 
            key={lang} 
            onClick={() => changeLanguage(lang)}
            className="flex items-center gap-2"
          >
            {getFlagComponent(lang)}
            {t(`language.${lang}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
