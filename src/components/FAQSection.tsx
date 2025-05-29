import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



const FAQSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  
  // Çeviri dosyasından SSS öğelerini alıyoruz
  const faqs = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer')
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer')
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer')
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer')
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer')
    },

  ];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="faq">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            {t('faq.mainTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('faq.mainDescription')}
          </p>
        </motion.div>
        
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
