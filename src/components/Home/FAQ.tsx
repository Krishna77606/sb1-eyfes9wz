import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How many people can the theater accommodate?',
    answer: 'Our theaters can accommodate varying group sizes, typically ranging from 2 to 20 people, depending on the theater type you choose.',
  },
  {
    question: 'What types of occasions can I celebrate?',
    answer: 'You can celebrate birthdays, anniversaries, proposals, corporate events, or any special occasion! We offer customized packages for different celebrations.',
  },
  {
    question: 'Can I bring my own food and beverages?',
    answer: 'While outside food is generally not allowed, we offer a wide range of food and beverage packages that you can pre-order with your booking.',
  },
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 1 week in advance to ensure availability, especially for weekends and special occasions.',
  },
  {
    question: 'What happens if I need to cancel my booking?',
    answer: 'Cancellations made 48 hours before the scheduled time are eligible for a full refund. Please check our cancellation policy for more details.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}