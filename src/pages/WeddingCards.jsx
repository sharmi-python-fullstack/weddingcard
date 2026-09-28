import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data/products';

const WeddingCards = () => {
  return (
    <div className="wedding-cards-page container page-section">
      <h1 className="section-heading cards-index-heading">WEDDING CARDS</h1>

      <div className="wedding-categories-grid">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            image={category.image}
            link={`/wedding-cards/${category.slug}`}
          />
        ))}
      </div>

      <style>{`
        .wedding-cards-page {
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .cards-index-heading {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 40px;
          text-align: center;
          color: #111111;
        }

        .wedding-categories-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .wedding-categories-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .wedding-categories-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .cards-index-heading {
            font-size: 24px;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .wedding-categories-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingCards;
