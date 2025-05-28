
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play } from 'lucide-react';
import { TbCards } from 'react-icons/tb';
import { GoTasklist } from 'react-icons/go';
import { FaQuestion } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const activityIcons = [
  {
    icon: <TbCards className="h-10 w-10 text-white" />,
    color: "bg-gradient-to-r from-[#FF8A3C] to-[#FF9E5C]",
  },
  {
    icon: <GoTasklist className="h-10 w-10 text-white" />,
    color: "bg-gradient-to-r from-[#1D9BF0] to-[#7DD3F9]",
  },
  {
    icon: <FaQuestion className="h-10 w-10 text-white" />,
    color: "bg-gradient-to-r from-[#3CF2A5] to-[#43e58c]",
  },
  {
    icon: <ImShuffle className="h-10 w-10 text-white" />,
    color: "bg-gradient-to-r from-[#f551a6] to-[#ff6dc5]",
  }
];

const ActivitySection = () => {
  const { t } = useTranslation();
  
  // Aktivite listesini oluşturuyoruz
  const activities = [
    {
      title: t('activity.items.0.title'),
      description: t('activity.items.0.description')
    },
    {
      title: t('activity.items.1.title'),
      description: t('activity.items.1.description')
    },
    {
      title: t('activity.items.2.title'),
      description: t('activity.items.2.description')
    },
    {
      title: t('activity.items.3.title'),
      description: t('activity.items.3.description')
    }
  ];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden" id="activities">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -z-10 bottom-0 left-1/4 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            {t('activity.mainTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('activity.mainDescription')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className={`${activityIcons[index].color} p-8 flex items-center justify-center md:w-1/3 relative overflow-hidden`}>
                    {/* Dekoratif arka plan desenleri */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/30 blur-md"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-white/20 blur-md"></div>
                    </div>
                    
                    <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner relative z-10">
                      {activityIcons[index].icon}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <CardHeader className="px-0 pt-0">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-bold">{activity.title}</CardTitle>
                        <Badge variant="outline" className="bg-gray-50 text-gray-500 text-xs">{t('activity.new')}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0 py-2">
                      <CardDescription className="text-gray-600 text-base">
                        {activity.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="px-0 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center text-white opacity-70">
                          <Play className="h-4 w-4 ml-0.5" />
                        </div>
                        <span className="text-sm italic text-gray-500">
                          {t('common.comingSoon')}
                        </span>
                      </div>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
