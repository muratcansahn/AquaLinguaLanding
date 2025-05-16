
import React from 'react';
import { BookText, Check, Play, Pen } from 'lucide-react';

const activities = [
  {
    icon: <BookText className="h-8 w-8 text-white" />,
    title: "Flashcards",
    description: "Kelimeleri kartlar halinde görüntüleyip sağa veya sola kaydırarak öğrenin.",
    color: "bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5]"
  },
  {
    icon: <Check className="h-8 w-8 text-white" />,
    title: "Quiz",
    description: "Çoktan seçmeli sorularla bilginizi test edin ve puan kazanın.",
    color: "bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0]"
  },
  {
    icon: <Pen className="h-8 w-8 text-white" />,
    title: "Writing",
    description: "Kelimelerin harflerini tahmin edin ve yazma becerilerinizi geliştirin.",
    color: "bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5]"
  },
  {
    icon: <Play className="h-8 w-8 text-white" />,
    title: "Word Matching",
    description: "Kelimeleri ve anlamlarını eşleştirerek hafızanızı güçlendirin.",
    color: "bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0]"
  }
];

const ActivitySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" id="activities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Çeşitli Öğrenme Aktiviteleri
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Farklı öğrenme metodları ile kelimeleri daha etkili bir şekilde öğrenin.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card overflow-hidden bg-white shadow-md border border-gray-100">
              <div className="flex items-start">
                <div className={`${activity.color} p-6 flex items-center justify-center`}>
                  <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
