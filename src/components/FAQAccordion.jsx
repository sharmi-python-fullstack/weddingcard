import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ items, defaultOpen = 1 }) => {
  const [openId, setOpenId] = useState(defaultOpen);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="faq-accordion-container">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="faq-item">
            <button
              type="button"
              className="faq-header-bar"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className="faq-question-text">{item.question}</span>
              <ChevronDown
                size={20}
                className={`faq-arrow-icon ${isOpen ? 'rotated' : ''}`}
                color="#000000"
              />
            </button>
            {isOpen && (
              <div className="faq-content-body animate-fade-in">
                {item.answer.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="faq-answer-para">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        .faq-accordion-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 980px;
          margin: 0 auto;
        }

        .faq-item {
          border-radius: 4px;
          overflow: hidden;
        }

        .faq-header-bar {
          width: 100%;
          background-color: var(--color-accent); /* Exact amber header strip in FAQ_s.png */
          color: #000000;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: background-color 0.2s ease;
        }

        .faq-header-bar:hover {
          background-color: var(--color-accent-hover);
        }

        .faq-question-text {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
          color: #000000;
        }

        .faq-arrow-icon {
          flex-shrink: 0;
          transition: transform 0.25s ease;
          margin-left: 12px;
        }

        .faq-arrow-icon.rotated {
          transform: rotate(180deg);
        }

        .faq-content-body {
          padding: 16px 20px 8px 20px;
          background: transparent;
        }

        .faq-answer-para {
          font-size: 15px;
          color: #2b2b2b;
          line-height: 1.6;
          margin-bottom: 12px;
        }
      `}</style>
    </div>
  );
};

export default FAQAccordion;
