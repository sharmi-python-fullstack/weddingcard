import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromCart } = useShop();

  // Filter products that are in the wishlist
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <div className="wishlist-page-wrapper container page-section">
      <h1 className="wishlist-heading">Wishlist</h1>

      {wishlistedProducts.length === 0 ? (
        <div className="wishlist-empty-card animate-fade-in">
          <h3>Your wishlist is currently empty</h3>
          <p>Click the heart icon on any card to save it to your favorites.</p>
          <Button to="/wedding-cards" variant="primary" size="md">
            Explore Invitations
          </Button>
        </div>
      ) : (
        <div className="wishlist-cards-grid animate-fade-in">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onHeartClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      )}

      <style>{`
        .wishlist-page-wrapper {
          padding-top: 30px;
          padding-bottom: 70px;
          min-height: 65vh;
        }

        .wishlist-heading {
          font-size: 32px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 36px;
        }

        .wishlist-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .wishlist-empty-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 60px 40px;
          text-align: center;
          max-width: 540px;
          margin: 40px auto;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .wishlist-empty-card h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .wishlist-empty-card p {
          color: #666;
          margin-bottom: 24px;
        }

        @media (max-width: 1024px) {
          .wishlist-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .wishlist-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .wishlist-heading {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .wishlist-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Wishlist;
