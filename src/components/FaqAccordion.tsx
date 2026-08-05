"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:border-primary"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-lg text-dark-blue hover:text-primary transition-colors focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="flex-shrink-0 ml-4 p-1 rounded-full bg-gray-50 text-gray-500 group-hover:bg-primary/10 transition-colors">
                {isOpen ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p className="whitespace-pre-line">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
