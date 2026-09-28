import React from 'react';
import FAQAccordion from '../components/FAQAccordion';
import { FAQ_ITEMS } from '../data/products';

const FAQ = () => {
  return (
    <div className="faq-page-wrapper container page-section">
      <h1 className="faq-page-heading">FREQUENTLY ASKED QUESTIONS</h1>

      <div className="faq-accordion-block animate-fade-in">
        <FAQAccordion items={FAQ_ITEMS} defaultOpen={1} />
      </div>

      <style>{`
        .faq-page-wrapper {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .faq-page-heading {
          font-size: 30px;
          font-weight: 700;
          color: #111111;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .faq-page-heading {
            font-size: 22px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQ;
