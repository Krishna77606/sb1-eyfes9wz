import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: 'What are the available time slots?',
    answer: 'We offer multiple slots throughout the day: 9:30 AM - 12:30 PM, 12:30 PM - 3:30 PM, 3:30 PM - 6:30 PM, 6:30 PM - 9:30 PM, and 9:30 PM - 12:30 AM.',
  },
  {
    question: 'How many people can be accommodated?',
    answer: 'We have different options: Couple (2 people), Family (8-10 people), and Group (6-8 people). Each option is priced differently to suit your needs.',
  },
  {
    question: 'What amenities are included?',
    answer: 'Our theaters come with premium features including 4K projection, Dolby Atmos sound system, comfortable recliner seats, and personalized service.',
  },
  {
    question: 'Can I bring my own food and beverages?',
    answer: 'While outside food is generally not allowed, we offer a wide range of food and beverage packages that you can pre-order with your booking.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 1 week in advance to ensure availability, especially for weekends and special occasions.',
  },
];

export function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}