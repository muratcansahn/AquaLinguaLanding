
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    role: "İngilizce Öğrencisi",
    content: "Uygulama sayesinde 3 ayda 1000'den fazla kelime öğrendim. Akvaryum özelliği beni her gün düzenli çalışmaya teşvik ediyor.",
    stars: 5
  },
  {
    name: "Mehmet Kaya",
    role: "Almanca Öğrencisi",
    content: "Quiz ve flashcard özellikleri sayesinde kelimeleri çok daha kolay hatırlıyorum. WordsApp'in gamification yaklaşımı öğrenmeyi çok keyifli hale getiriyor.",
    stars: 5
  },
  {
    name: "Zeynep Demir",
    role: "İspanyolca Öğrencisi",
    content: "Writing aktivitesi sayesinde kelimelerin yazılışını çok daha hızlı öğrendim. Akvaryumdaki balıklarımı büyütmek için her gün en az 15 dakika pratik yapıyorum.",
    stars: 4
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" id="testimonials">
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
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#1EAEDB] flex items-center justify-center text-white font-medium">
                    {testimonial.name.substring(0, 1)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
