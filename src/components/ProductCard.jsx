import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product, showBagIcon = false, onHeartClick = null }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist, addToCart } = useShop();
  const isLiked = isInWishlist(product.id);

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    if (onHeartClick) {
      onHeartClick(product);
    } else {
      // Navigate to wishlist/liked invitation page as specified by user
      navigate('/wishlist');
    }
  };

  const handleBagClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 2);
    navigate('/cart');
  };

  return (
    <div className="product-card-wrap">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-card-img"
            loading="lazy"
          />
          {/* Heart overlay button */}
          <button
            type="button"
            className={`card-heart-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleHeartClick}
            title={isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
            aria-label="Wishlist"
          >
            <Heart
              size={18}
              strokeWidth={2}
              fill={isLiked ? "#ffffff" : "none"}
              color={isLiked ? "#ffffff" : "#ffffff"}
            />
          </button>
        </div>

        <div className="product-info">
          <h4 className="product-title" title={product.title}>
            {product.title}
          </h4>
          <div className="product-bottom-row">
            <span className="product-price">
              Rs. {Number(product.price).toFixed(2)}
            </span>

            {showBagIcon && (
              <div className="card-inline-actions">
                <button
                  type="button"
                  className="card-inline-heart"
                  onClick={handleHeartClick}
                  aria-label="Save item"
                >
                  <Heart
                    size={18}
                    fill={isLiked ? "#c92a2a" : "none"}
                    color={isLiked ? "#c92a2a" : "#444444"}
                  />
                </button>
                <button
                  type="button"
                  className="card-inline-bag"
                  onClick={handleBagClick}
                  aria-label="Add to cart"
                >
                  <ShoppingBag size={18} color="#444444" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>

      <style>{`
        .product-card-wrap {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-card-wrap:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .product-card-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }

        .product-image-container {
          position: relative;
          background: #fdf6ec; /* Cream / light peach background matching Figma frames */
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 14px;
          transition: transform 0.3s ease;
        }

        .product-card-wrap:hover .product-card-img {
          transform: scale(1.05);
        }

        .card-heart-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(80, 80, 80, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: all 0.2s ease;
          border: none;
        }

        .card-heart-btn:hover {
          background: rgba(40, 40, 40, 0.9);
          transform: scale(1.1);
        }

        .card-heart-btn.liked {
          background: #c92a2a;
        }

        .product-info {
          padding: 14px 16px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .product-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.35;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .product-price {
          font-size: 16px;
          font-weight: 700;
          color: #b72b2b; /* Exact red/crimson accent used in Figma product listings */
        }

        .card-inline-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-inline-heart, .card-inline-bag {
          background: transparent;
          border: none;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.15s;
        }

        .card-inline-heart:hover, .card-inline-bag:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
