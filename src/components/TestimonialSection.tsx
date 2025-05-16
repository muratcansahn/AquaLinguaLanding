
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    role: "İngilizce Öğrencisi",
    content: "Uygulama sayesinde 3 ayda 1000'den fazla kelime öğrendim. Akvaryum özelliği beni her gün düzenli çalışmaya teşvik ediyor.",
    stars: 5,
    initials: "AY"
  },
  {
    name: "Mehmet Kaya",
    role: "Almanca Öğrencisi",
    content: "Quiz ve flashcard özellikleri sayesinde kelimeleri çok daha kolay hatırlıyorum. WordsApp'in gamification yaklaşımı öğrenmeyi çok keyifli hale getiriyor.",
    stars: 5,
    initials: "MK"
  },
  {
    name: "Zeynep Demir",
    role: "İspanyolca Öğrencisi",
    content: "Writing aktivitesi sayesinde kelimelerin yazılışını çok daha hızlı öğrendim. Akvaryumdaki balıklarımı büyütmek için her gün en az 15 dakika pratik yapıyorum.",
    stars: 4,
    initials: "ZD"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Kullanıcılarımızın Deneyimleri
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            WordsApp'in kelime öğrenme deneyiminizi nasıl değiştirdiğini keşfedin.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2 pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative">
                <Quote className="absolute -top-1 -left-1 h-8 w-8 text-purple-100 rotate-180" />
                <p className="text-gray-700 mb-6 relative z-10 pl-6">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 bg-gradient-to-br from-[#8B5CF6] to-[#1EAEDB]">
                    <AvatarFallback className="text-white font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
