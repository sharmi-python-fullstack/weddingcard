import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

const CategoryListing = () => {
  const { category = 'hindu' } = useParams();

  // Find category title or default to Hindu Wedding Cards
  const catObj = CATEGORIES.find(c => c.slug === category);
  const headingTitle = catObj ? catObj.name.toUpperCase() : 'HINDU WEDDING CARDS';

  // For hindu or all, show all products
  const displayProducts = category === 'all' || category === 'hindu'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category || p.category === 'hindu');

  return (
    <div className="category-listing-page container page-section">
      <h1 className="section-heading category-page-title">{headingTitle}</h1>

      <div className="product-listing-grid">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <style>{`
        .category-listing-page {
          padding-top: 40px;
          padding-bottom: 60px;
        }

        .category-page-title {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 40px;
          text-align: center;
          color: #111111;
        }

        .product-listing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1100px) {
          .product-listing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .product-listing-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .category-page-title {
            font-size: 24px;
            margin-bottom: 24px;
          }
        }

        @media (max-width: 480px) {
          .product-listing-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryListing;
