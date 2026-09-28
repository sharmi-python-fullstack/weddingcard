import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, User, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import IMAGES from '../assets/assets';


const Header = () => {
  const navigate = useNavigate();
  const { cartCount, wishlist, searchQuery, setSearchQuery } = useShop();
  const [localQuery, setLocalQuery] = useState(searchQuery || '');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setSearchQuery(localQuery);
      navigate(`/search?q=${encodeURIComponent(localQuery.trim())}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner container">
        {/* Left: Brand Logo */}
        <Link to="/" className="brand-logo">
          <img
            src="/brand-logo.png"
            alt="WedKnotCraft Logo"
            className="brand-logo-img"
            width="72"
            height="72"
            loading="eager"
          />
          <div className="brand-wordmark">
            <span className="wordmark-wed">Wed</span>
            <span className="wordmark-knot">Knot</span>
            <span className="wordmark-craft">Craft</span>
          </div>
        </Link>


        {/* Center / Right: Search Bar */}
        <form className="header-search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="header-search-input"
            placeholder="Search..."
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
          />
          <button type="submit" className="header-search-btn" aria-label="Search">
            <Search size={20} color="#333333" />
          </button>
        </form>

        {/* Right: Quick Action Icons */}
        <div className="header-actions">
          <Link to="/login" className="action-icon-btn" title="My Account" aria-label="Account">
            <User size={26} strokeWidth={1.8} color="#222222" />
          </Link>

          <Link to="/wishlist" className="action-icon-btn wishlist-icon-btn" title="Wishlist" aria-label="Wishlist">
            <Heart size={26} strokeWidth={1.8} color="#222222" />
            {wishlist.length > 0 && (
              <span className="action-badge wishlist-badge">{wishlist.length}</span>
            )}
          </Link>

          <Link to="/cart" className="action-icon-btn cart-icon-btn" title="Cart" aria-label="Shopping Cart">
            <ShoppingCart size={26} strokeWidth={1.8} color="#222222" />
            <span className="action-badge cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>

      <style>{`
        .site-header {
          background-color: var(--color-primary);
          padding: 12px 0 6px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }

        .brand-logo-img {
          width: 72px;
          height: 72px;
          object-fit: contain;
          flex-shrink: 0;
        }


        .brand-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }

        .wordmark-wed {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 20px;
          font-weight: 700;
          color: #2b2b2b;
        }

        .wordmark-knot {
          font-family: 'Great Vibes', cursive;
          font-size: 24px;
          color: #474747;
          margin-top: -4px;
          margin-bottom: -4px;
          margin-left: 10px;
        }

        .wordmark-craft {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 18px;
          font-weight: 600;
          color: #2b2b2b;
          margin-left: 20px;
        }

        .header-search-form {
          flex: 1;
          max-width: 480px;
          position: relative;
          display: flex;
          align-items: center;
          margin-left: auto;
          margin-right: 36px;
        }

        .header-search-input {
          width: 100%;
          height: 42px;
          border-radius: 6px;
          border: 1px solid #333333;
          background: #ffffff;
          padding: 0 46px 0 16px;
          font-size: 15px;
          outline: none;
          color: #222222;
          transition: border-color 0.2s;
        }

        .header-search-input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 2px rgba(255, 171, 13, 0.2);
        }

        .header-search-btn {
          position: absolute;
          right: 12px;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .action-icon-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          transition: transform 0.15s, background-color 0.15s;
        }

        .action-icon-btn:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.5);
        }

        .action-badge {
          position: absolute;
          top: -2px;
          right: -4px;
          background-color: #000000;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--color-primary);
        }

        .wishlist-badge {
          background-color: #c92a2a;
        }

        @media (max-width: 900px) {
          .header-search-form {
            margin-right: 16px;
            max-width: 300px;
          }
        }

        @media (max-width: 768px) {
          .header-inner {
            flex-wrap: wrap;
          }
          .header-search-form {
            order: 3;
            max-width: 100%;
            margin: 8px 0 0 0;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
