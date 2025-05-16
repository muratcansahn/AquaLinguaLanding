
import React from 'react';
import { BookText, Check, Play, Pen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    icon: <BookText className="h-10 w-10 text-white" />,
    title: "Flashcards",
    description: "Kelimeleri kartlar halinde görüntüleyip sağa veya sola kaydırarak öğrenin.",
    color: "bg-gradient-to-r from-[#FF8A3C] to-[#FF9E5C]",
    difficulty: "Kolay"
  },
  {
    icon: <Check className="h-10 w-10 text-white" />,
    title: "Quiz",
    description: "Çoktan seçmeli sorularla bilginizi test edin ve puan kazanın.",
    color: "bg-gradient-to-r from-[#1D9BF0] to-[#7DD3F9]",
    difficulty: "Orta"
  },
  {
    icon: <Pen className="h-10 w-10 text-white" />,
    title: "Writing",
    description: "Kelimelerin harflerini tahmin edin ve yazma becerilerinizi geliştirin.",
    color: "bg-gradient-to-r from-[#FF8A3C] to-[#FF9E5C]",
    difficulty: "Zor"
  },
  {
    icon: <Play className="h-10 w-10 text-white" />,
    title: "Word Matching",
    description: "Kelimeleri ve anlamlarını eşleştirerek hafızanızı güçlendirin.",
    color: "bg-gradient-to-r from-[#1D9BF0] to-[#7DD3F9]",
    difficulty: "Orta"
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
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className={`${activity.color} p-8 flex items-center justify-center md:w-1/3`}>
                  <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl">{activity.title}</CardTitle>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {activity.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-0 py-2">
                    <CardDescription className="text-gray-600 text-base">
                      {activity.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="px-0 pt-4 pb-0">
                    <Button variant="ghost" className="p-0 h-auto text-[#1D9BF0] hover:text-[#1a8ad8] hover:bg-transparent">
                      Aktiviteyi Dene <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
